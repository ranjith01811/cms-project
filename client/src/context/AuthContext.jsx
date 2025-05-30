import React, { createContext, useContext, useEffect, useState } from "react";
import UserService from "../service/UserService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check auth state on app load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      UserService.getUserProfile(token).then((profile) => {
        if (profile) {
          setUser(profile);
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const signup = async (email, password) => {
    const profileData = await UserService.signup(email, password);
    localStorage.setItem("authToken", profileData.token);
    setUser(profileData);
  };

  const signin = async (email, password) => {
    const profile = await UserService.signin(email, password);
    if (profile.password === password) {
      localStorage.setItem("authToken", profile.token);
      setUser(profile);
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    UserService.logout(); // optional, it's a stub
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, signin, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);