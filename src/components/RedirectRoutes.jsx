import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const RedirectRoute = () => {
  const { user } = useContext(AuthContext);

 
  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default RedirectRoute;
