import React, { createContext, useContext, useState, useEffect } from "react";
import UserService from "../service/UserService"; // Make sure this exists or mock it

// ✅ Create the context first
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
          const userData = await UserService.getUserProfile(storedToken); 
          if (userData) {
            setUser(userData);
          } else {
            localStorage.removeItem("authToken"); 
          }
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        localStorage.removeItem("authToken"); 
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const signup = async (email, password) => {
    setLoading(true);
    try {
      const userData = await UserService.signup(email, password);
      setUser(userData);
      localStorage.setItem("authToken", userData.token); 
      return userData;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signin = async (email, password) => {
    setLoading(true);
    try {
      const userData = await UserService.signin(email, password);
      setUser(userData);
      localStorage.setItem("authToken", userData.token); 
      return userData;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await UserService.logout(); 
      setUser(null);
      localStorage.removeItem("authToken"); 
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    signup,
    signin,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// ✅ Export both the provider and the hook
export { AuthProvider };

export function useAuth() {
  return useContext(AuthContext);
}
