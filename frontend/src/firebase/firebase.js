// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJXEB1V5a76rKmKc22hS13C6XZrG2Odsk",
  authDomain: "careerpilot-c690d.firebaseapp.com",
  projectId: "careerpilot-c690d",
  storageBucket: "careerpilot-c690d.firebasestorage.app",
  messagingSenderId: "903389575015",
  appId: "1:903389575015:web:302eed83ad964f95d7a1c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);