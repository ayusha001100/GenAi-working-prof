import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { auth, db, googleProvider, analytics } from '../config/firebase';
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    doc,
    getDoc,
    setDoc,
    onSnapshot,
    serverTimestamp
} from 'firebase/firestore';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        let unsubscribeSnapshot = null;

        const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            // Clean up previous snapshot listener if it exists
            if (unsubscribeSnapshot) {
                unsubscribeSnapshot();
                unsubscribeSnapshot = null;
            }

            if (currentUser) {
                // Setup Real-time Listener for User Data
                const userRef = doc(db, 'users', currentUser.uid);

                unsubscribeSnapshot = onSnapshot(userRef, async (docSnap) => {
                    if (docSnap.exists()) {
                        setUserData(docSnap.data());
                    } else {
                        // Initialize new user data if it doesn't exist
                        const newData = {
                            uid: currentUser.uid,
                            email: currentUser.email,
                            name: currentUser.displayName,
                            createdAt: serverTimestamp(),
                            progress: { completedSections: [] },
                            stats: { totalPoints: 0, totalCorrect: 0, totalIncorrect: 0 },
                            role: 'user'
                        };
                        await setDoc(userRef, newData);
                        // setDoc will trigger the snapshot listener again
                    }
                    setLoading(false);
                }, (error) => {
                    console.error("User snapshot error:", error);
                    setLoading(false);
                });
            } else {
                setUserData(null);
                setLoading(false);
            }
        });

        return () => {
            unsubscribeAuth();
            if (unsubscribeSnapshot) unsubscribeSnapshot();
        };
    }, []);

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            return result.user;
        } catch (error) {
            console.error("Login Error:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setUserData(null);
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const login = async () => console.warn("Email login not implemented");
    const signup = async () => console.warn("Email signup not implemented");

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


