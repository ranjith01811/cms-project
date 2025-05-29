import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Create the Auth Context
const AuthContext = createContext();

// Custom hook to use the Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [firebaseApp, setFirebaseApp] = useState(null);
  const [authInstance, setAuthInstance] = useState(null);
  const [dbInstance, setDbInstance] = useState(null);

  useEffect(() => {
    const initializeFirebase = async () => {
      try {
        // Retrieve Firebase config and initial auth token from global variables
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
        const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

        // Initialize Firebase app
        const app = initializeApp(firebaseConfig);
        setFirebaseApp(app);

        // Get Auth and Firestore instances
        const auth = getAuth(app);
        setAuthInstance(auth);
        const db = getFirestore(app);
        setDbInstance(db);

        // Attempt to sign in the user immediately
        if (initialAuthToken) {
          await signInWithCustomToken(auth, initialAuthToken);
        } else {
          await signInAnonymously(auth);
        }

        // Listen for authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setLoading(false);
        }, (err) => {
          console.error("Auth state error:", err);
          setError("Authentication service error.");
          setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
      } catch (err) {
        console.error("Error initializing Firebase:", err);
        setError("Failed to initialize Firebase.");
        setLoading(false);
      }
    };

    initializeFirebase();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Firebase authentication functions
  const signup = (email, password) => {
    if (!authInstance) throw new Error("Firebase Auth not initialized.");
    return createUserWithEmailAndPassword(authInstance, email, password);
  };

  const signin = (email, password) => {
    if (!authInstance) throw new Error("Firebase Auth not initialized.");
    return signInWithEmailAndPassword(authInstance, email, password);
  };

  const logout = () => {
    if (!authInstance) throw new Error("Firebase Auth not initialized.");
    return signOut(authInstance);
  };

  // Value provided by the context
  const value = {
    currentUser,
    loading,
    error,
    signup,
    signin,
    logout,
    auth: authInstance, // Export auth instance
    db: dbInstance // Export db instance
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Only render children once loading is complete */}
    </AuthContext.Provider>
  );
};
