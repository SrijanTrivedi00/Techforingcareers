import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token")
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
