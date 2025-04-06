// Import the functions you need from the SDKs you need
import { getApp, getApps ,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVvGK6bMK_jHsm4fuP96QPPena37-v0KM",
  authDomain: "ai-assistant-s.firebaseapp.com",
  projectId: "ai-assistant-s",
  storageBucket: "ai-assistant-s.firebasestorage.app",
  messagingSenderId: "745973177119",
  appId: "1:745973177119:web:12deffcdd05a311ccf2e2a"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };