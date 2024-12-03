import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Navigate to="/" /> : <>{children}</>;
};
