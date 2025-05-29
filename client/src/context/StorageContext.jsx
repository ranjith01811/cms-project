const StorageContext = createContext();

const useStorage = () => {
  const context = useContext(StorageContext);
  if (context === undefined) {
    throw new Error('useStorage must be used within a StorageProvider');
  }
  return context;
};

const StorageProvider = ({ children }) => {
  const { currentUser, db } = useAuth(); // Get db instance from AuthContext
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }

    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const eventsCollectionRef = collection(db, `artifacts/${appId}/public/data/events`);
    const unsubscribeEvents = onSnapshot(eventsCollectionRef, (snapshot) => {
      const eventsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(prevData => ({ ...prevData, events: eventsData }));
      setLoading(false);
    }, (err) => {
      console.error("Error fetching events in StorageContext:", err);
      setError("Failed to load data.");
      setLoading(false);
    });

    return () => {
      unsubscribeEvents();
    };
  }, [db]);

  const addDocument = async (collectionName, documentData) => {
    if (!db) {
      console.error("Firestore not initialized.");
      return;
    }
    try {
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const collectionRef = collection(db, `artifacts/${appId}/public/data/${collectionName}`);
      const docRef = await addDoc(collectionRef, {
        ...documentData,
        createdAt: new Date().toISOString(),
        createdBy: currentUser ? currentUser.uid : 'anonymous'
      });
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw new Error("Failed to add document.");
    }
  };

  const updateDocument = async (collectionName, docId, updatedData) => {
    if (!db) {
      console.error("Firestore not initialized.");
      return;
    }
    try {
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const docRef = doc(db, `artifacts/${appId}/public/data/${collectionName}`, docId);
      await updateDoc(docRef, {
        ...updatedData,
        updatedAt: new Date().toISOString()
      });
    } catch (e) {
      console.error("Error updating document: ", e);
      throw new Error("Failed to update document.");
    }
  };

  const deleteDocument = async (collectionName, docId) => {
    if (!db) {
      console.error("Firestore not initialized.");
      return;
    }
    try {
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const docRef = doc(db, `artifacts/${appId}/public/data/${collectionName}`, docId);
      await deleteDoc(docRef);
    } catch (e) {
      console.error("Error deleting document: ", e);
      throw new Error("Failed to delete document.");
    }
  };

  const value = {
    loading,
    error,
    data,
    addDocument,
    updateDocument,
    deleteDocument,
  };

  return (
    <StorageContext.Provider value={value}>
      {!loading && children}
    </StorageContext.Provider>
  );
};