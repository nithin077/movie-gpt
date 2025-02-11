// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwZWQrfPug9b8E_p35Mqt0CijKMzAOYCw",
  authDomain: "moviegpt-5e983.firebaseapp.com",
  projectId: "moviegpt-5e983",
  storageBucket: "moviegpt-5e983.firebasestorage.app",
  messagingSenderId: "980578981849",
  appId: "1:980578981849:web:23c9d2544fbb30db19abc8",
  measurementId: "G-BF3RXZ27EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();