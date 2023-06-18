import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, user } = useContext(AuthContext);
    const isAdmin = user.role === 'admin';

    return (
        <Route
            {...rest}
            element={isAuthenticated && isAdmin ? (
                <Component />
            ) : (
                <Navigate to="/login" replace />
            )}
        />
    );
};

export default PrivateRoute;
