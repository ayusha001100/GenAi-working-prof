import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import {
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // Fetch or sync user data from Firestore
                const userDocRef = doc(db, 'users', currentUser.uid);

                // Real-time listener for user data
                const unsubDoc = onSnapshot(userDocRef, (docSnap) => {
                    if (docSnap.exists()) {
                        setUserData(docSnap.data());
                    } else {
                        // Create initial record if it doesn't exist
                        const initialData = {
                            email: currentUser.email,
                            name: currentUser.displayName || currentUser.email.split('@')[0],
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
                        setDoc(userDocRef, initialData);
                        setUserData(initialData);
                    }
                });

                setLoading(false);
                return () => unsubDoc();
            } else {
                setUserData(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logout = () => {
        return signOut(auth);
    };

    const updateUserData = async (newData) => {
        if (!user) return;

        const userDocRef = doc(db, 'users', user.uid);
        let updatedData;

        if (typeof newData === 'function') {
            updatedData = newData(userData);
        } else if (newData && (newData.progress || newData.stats)) {
            updatedData = newData;
        } else {
            updatedData = { ...userData, ...newData };
        }

        try {
            await updateDoc(userDocRef, updatedData);
        } catch (error) {
            console.error("Error updating user data:", error);
            // Fallback to setDoc if it doesn't exist
            await setDoc(userDocRef, updatedData, { merge: true });
        }
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
