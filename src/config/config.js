// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCHV81uGYv1K0UqKZbQityH-4jVqERJvCI",
  authDomain: "strugend.firebaseapp.com",
  projectId: "strugend",
  storageBucket: "strugend.appspot.com",
  messagingSenderId: "400832057897",
  appId: "1:400832057897:web:7441ea9f85a50db6af4238",
  measurementId: "G-P8N0LZQF68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};