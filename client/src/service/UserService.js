const UserService = {
  getUserProfile: async (userId) => {
    if (!db) {
      console.error("Firestore not initialized.");
      return null;
    }
    try {
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile`, 'data');
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        return { id: userDocSnap.id, ...userDocSnap.data() };
      } else {
        console.log("No such user profile!");
        return null;
      }
    } catch (e) {
      console.error("Error getting user profile: ", e);
      throw new Error("Failed to fetch user profile.");
    }
  },

  setUserProfile: async (userId, profileData) => {
    if (!db) {
      console.error("Firestore not initialized.");
      return;
    }
    try {
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const userDocRef = doc(db, `artifacts/${appId}/users/${userId}/profile`, 'data');
      await setDoc(userDocRef, profileData, { merge: true });
      console.log("User profile updated successfully!");
    } catch (e) {
      console.error("Error setting user profile: ", e);
      throw new Error("Failed to set user profile.");
    }
  }
};