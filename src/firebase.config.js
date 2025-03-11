// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUAlJWepSpsurwZEfQlzUa-mh72Zq68xs",
    authDomain: "login-curso-expo-b2a6f.firebaseapp.com",
    projectId: "login-curso-expo-b2a6f",
    storageBucket: "login-curso-expo-b2a6f.firebasestorage.app",
    messagingSenderId: "128322241822",
    appId: "1:128322241822:web:4e34351f98a994c180750f"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(firebase);

