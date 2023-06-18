import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const PrivateRoute = ({ children, expectedRoles, ...rest }) => {
    const { isAuthenticated, user } = useContext(AuthContext);
    const userRoles = user.role; // Assuming user roles are stored in an array

    const isAuthorized = expectedRoles.some(role => userRoles.includes(role));

    if (!isAuthenticated || !isAuthorized) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
