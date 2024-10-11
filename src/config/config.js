// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrPBaFPxisn9tV_q0P-BaK33JWfosxokY",
  authDomain: "note-da5d0.firebaseapp.com",
  projectId: "note-da5d0",
  storageBucket: "note-da5d0.appspot.com",
  messagingSenderId: "116630303738",
  appId: "1:116630303738:web:1e7d33d1f46ae1d1ffea43",
  measurementId: "G-H07REGR4B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}
