
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div className="p-8">Loading...</div>;
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />;
  return children;
}
