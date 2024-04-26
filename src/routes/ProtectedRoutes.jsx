import { useContext } from "react";
import { AuthContext } from "../pages/provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-success w-8"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ProtectedRoutes;
