import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAfrz3pR8aGjEtC8bKtRKTbNgk8ZWHylFA",
    authDomain: "letsupgradewp.firebaseapp.com",
    projectId: "letsupgradewp",
    storageBucket: "letsupgradewp.firebasestorage.app",
    messagingSenderId: "129607189848",
    appId: "1:129607189848:web:cd339e76e41ac61624912d",
    measurementId: "G-MJ03FJ5XPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { auth, db, googleProvider, analytics };
