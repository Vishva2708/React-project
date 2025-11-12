// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEmzAzTdpSr3XHiK-zfqmD6V49DQ00zP8",
  authDomain: "myproject-2cc42.firebaseapp.com",
  databaseURL: "https://myproject-2cc42-default-rtdb.firebaseio.com",
  projectId: "myproject-2cc42",
  storageBucket: "myproject-2cc42.firebasestorage.app",
  messagingSenderId: "640523888899",
  appId: "1:640523888899:web:67b74cafb6a9ff7016e136",
  measurementId: "G-V7DC9790RC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);