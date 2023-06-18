import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, expectedRoles, ...rest }) => {
    const { isAuthenticated, user } = useContext(AuthContext);
    let isAuthorized = false;
    if (user && user.role) {
        isAuthorized = expectedRoles.includes(user.role);
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />

    }

    if (!isAuthorized){
        return <Navigate to="/" replace />
    }

    return children;
};

export default PrivateRoute;
