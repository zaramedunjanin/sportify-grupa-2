import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const PrivateRoute = ({ children , ...rest }) => {
    const { isAuthenticated, user } = useContext(AuthContext);
    const isAdmin = user.role === 'admin';

    if (!isAdmin) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
