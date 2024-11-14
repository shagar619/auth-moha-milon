// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNB4-1Pmj2H2zJsVcjdJPjCE1e2YaS9-g",
  authDomain: "auth-moha-milon-d3c34.firebaseapp.com",
  projectId: "auth-moha-milon-d3c34",
  storageBucket: "auth-moha-milon-d3c34.firebasestorage.app",
  messagingSenderId: "260172988490",
  appId: "1:260172988490:web:3ec86f2fa30e648a2be6b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);