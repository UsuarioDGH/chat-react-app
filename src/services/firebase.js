// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3gHGkXm_qw1yYVTBbT7VMJXPQiY_xMSM",
  authDomain: "chat-firebase-22b80.firebaseapp.com",
  projectId: "chat-firebase-22b80",
  storageBucket: "chat-firebase-22b80.appspot.com",
  messagingSenderId: "24054764683",
  appId: "1:24054764683:web:244463b34bb082e1efb08e",
  measurementId: "G-LLG3MT7GWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//onst analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);