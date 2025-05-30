import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; 

  return user ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoutes;
