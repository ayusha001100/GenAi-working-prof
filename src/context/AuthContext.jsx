import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Check localStorage on initial load
        return localStorage.getItem('auth_token') === 'iamsmart_token';
    });

    const login = () => {
        localStorage.setItem('auth_token', 'iamsmart_token');
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        // Redirect to login but save the attempted location? (Simplification for now: just go home)
        return <LoginRedirect />;
    }

    return children;
};

// Helper to handle redirection since Navigate needs to be rendered inside Router context
// But ProtectedRoute is used inside Routes. Ideally we use <Navigate to="/" />
import { Navigate } from 'react-router-dom';

const LoginRedirect = () => <Navigate to="/" replace />;
