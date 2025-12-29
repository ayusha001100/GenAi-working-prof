import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Load user from localStorage on mount
        const storedUser = localStorage.getItem('user');
        const storedUserData = localStorage.getItem('userData');
        
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login - create a user object
        const mockUser = {
            uid: `user_${Date.now()}`,
            email: email,
            displayName: email.split('@')[0],
            metadata: {
                creationTime: new Date().toISOString()
            }
        };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        
        const initialData = {
            email: email,
            name: email.split('@')[0],
            createdAt: new Date().toISOString(),
            progress: {
                completedSections: []
            },
            stats: {
                totalPoints: 0,
                totalCorrect: 0,
                totalIncorrect: 0
            },
            role: 'user'
        };
        setUserData(initialData);
        localStorage.setItem('userData', JSON.stringify(initialData));
        
        return Promise.resolve({ user: mockUser });
    };

    const signup = (email, password) => {
        // Mock signup - same as login
        return login(email, password);
    };

    const loginWithGoogle = () => {
        // Mock Google login - create a user object
        const mockUser = {
            uid: `user_${Date.now()}`,
            email: 'user@example.com',
            displayName: 'User',
            metadata: {
                creationTime: new Date().toISOString()
            }
        };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        
        const storedUserData = localStorage.getItem('userData');
        if (!storedUserData) {
            const initialData = {
                email: 'user@example.com',
                name: 'User',
                createdAt: new Date().toISOString(),
                progress: {
                    completedSections: []
                },
                stats: {
                    totalPoints: 0,
                    totalCorrect: 0,
                    totalIncorrect: 0
                },
                role: 'user'
            };
            setUserData(initialData);
            localStorage.setItem('userData', JSON.stringify(initialData));
        } else {
            setUserData(JSON.parse(storedUserData));
        }
        
        return Promise.resolve({ user: mockUser });
    };

    const logout = () => {
        setUser(null);
        setUserData(null);
        localStorage.removeItem('user');
        localStorage.removeItem('userData');
        return Promise.resolve();
    };

    const updateUserData = (newData) => {
        // If newData is a function, use it to update state
        // Otherwise, if it has progress/stats (full userData object), use it directly
        // Otherwise merge with existing userData
        let updatedData;
        if (typeof newData === 'function') {
            updatedData = newData(userData);
        } else if (newData && (newData.progress || newData.stats)) {
            // Full userData object provided
            updatedData = newData;
        } else {
            // Partial update - merge
            updatedData = { ...userData, ...newData };
        }
        setUserData(updatedData);
        localStorage.setItem('userData', JSON.stringify(updatedData));
    };

    const value = {
        user,
        userData,
        loading,
        login,
        signup,
        loginWithGoogle,
        logout,
        setUserData: updateUserData
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
