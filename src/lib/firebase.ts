// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFhnF5XuOQ-duErU3tQaGvrc31GZ6c5oo",
  authDomain: "android-01-5209b.firebaseapp.com",
  databaseURL: "https://android-01-5209b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "android-01-5209b",
  storageBucket: "android-01-5209b.firebasestorage.app",
  messagingSenderId: "971036103300",
  appId: "1:971036103300:web:b10b5c149110d6693a68d1",
  measurementId: "G-7SW5X9HZL3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getDatabase(app);

// Initialize Analytics only on the client side
if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported) {
      getAnalytics(app);
    }
  });
}
