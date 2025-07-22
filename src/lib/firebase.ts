// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "profile-forge-hlxo6",
  appId: "1:924157496100:web:63d134f3cd5c0bc6bbc1b1",
  storageBucket: "profile-forge-hlxo6.firebasestorage.app",
  apiKey: "AIzaSyAWK9JTZXJEas52dRwU0K7oxt-WcSAHh-8",
  authDomain: "profile-forge-hlxo6.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "924157496100",
  databaseURL: "https://profile-forge-hlxo6-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
