// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQ9v65kjbSxhuYNHVnweNtwxdvQRNkXdk",
    authDomain: "gen-ai-6ed21.firebaseapp.com",
    projectId: "gen-ai-6ed21",
    storageBucket: "gen-ai-6ed21.firebasestorage.app",
    messagingSenderId: "194794527508",
    appId: "1:194794527508:web:e56b83f9bbe7f26c45c001",
    measurementId: "G-CM8QNM68DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
export default app;
