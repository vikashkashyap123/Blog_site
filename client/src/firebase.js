// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-a0190.firebaseapp.com",
  projectId: "blog-a0190",
  storageBucket: "blog-a0190.appspot.com",
  messagingSenderId: "223675550495",
  appId: "1:223675550495:web:5c01c1e43a1e7b02c7be2a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);