import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

const AuthContext = createContext(null);

// Mock user for local development
const MOCK_USER = {
    uid: 'local-user-id',
    email: 'local@example.com',
    displayName: 'Local User',
    photoURL: 'https://ui-avatars.com/api/?name=Local+User'
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Load user from localStorage on mount
        const savedUser = localStorage.getItem('mock_user');
        const savedUserData = localStorage.getItem('mock_user_data');
        
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        if (savedUserData) {
            setUserData(JSON.parse(savedUserData));
        }
        
        setLoading(false);
    }, []);

    const loginWithGoogle = async () => {
        // Mock Google login
        setUser(MOCK_USER);
        localStorage.setItem('mock_user', JSON.stringify(MOCK_USER));
        
        const initialUserData = {
            uid: MOCK_USER.uid,
            email: MOCK_USER.email,
            name: MOCK_USER.displayName,
            photoURL: MOCK_USER.photoURL,
            createdAt: new Date().toISOString(),
            progress: { completedSections: [] },
            stats: { totalPoints: 0, totalCorrect: 0, totalIncorrect: 0 },
            role: 'user'
        };
        
        setUserData(initialUserData);
        localStorage.setItem('mock_user_data', JSON.stringify(initialUserData));
        return MOCK_USER;
    };

    const logout = async () => {
        setUser(null);
        setUserData(null);
        localStorage.removeItem('mock_user');
        localStorage.removeItem('mock_user_data');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_phone');
    };

    const login = async () => console.warn("Email login not implemented in this version");
    const signup = async () => console.warn("Email signup not implemented in this version");

    const value = {
        user,
        userData,
        loading,
        loginWithGoogle,
        logout,
        login,
        signup,
        setUserData
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return null;

    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

