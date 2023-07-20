// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  indexedDBLocalPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2jMY0-to6TRsCui-09lHQwtanSgiX-WM",
  authDomain: "test-5c1b8.firebaseapp.com",
  projectId: "test-5c1b8",
  storageBucket: "test-5c1b8.appspot.com",
  messagingSenderId: "157677743814",
  appId: "1:157677743814:web:0ead725eba0022fddb31c7",
  measurementId: "G-XPJW9D33X2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {
  app,
  auth,
  RecaptchaVerifier,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  indexedDBLocalPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  signOut,
};
