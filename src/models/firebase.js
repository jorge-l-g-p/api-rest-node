// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "api-rest-node-34af8.firebaseapp.com",
  projectId: "api-rest-node-34af8",
  storageBucket: "api-rest-node-34af8.firebasestorage.app",
  messagingSenderId: "970283095986",
  appId: "1:970283095986:web:ebbdd3a141511aa14df6ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializar Firestore
const db = getFirestore(app);
export { db };
