import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, expectedRoles, ...rest }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  console.log("Private",user)

  let isAuthorized = false;
  if (user && user.role) {
    isAuthorized = expectedRoles.includes(user.role);
  }
  console.log(isAuthenticated)

  if (!isAuthenticated && !user) {
    return <Navigate to="/login" replace />;
  }

  if (!isAuthorized && !user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
