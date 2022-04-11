// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeStniQJwYbnCyNxfJMxcW_ca9l4G6HwI",
  authDomain: "qwertyshop-f5b2b.firebaseapp.com",
  projectId: "qwertyshop-f5b2b",
  storageBucket: "qwertyshop-f5b2b.appspot.com",
  messagingSenderId: "692365680544",
  appId: "1:692365680544:web:aae4beba0ce77ef8b34ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
