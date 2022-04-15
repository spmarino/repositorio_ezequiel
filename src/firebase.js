// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs7Z2nPKQ45E5Zc3CAPwwm7g40MALSbVI",
  authDomain: "lacoprats-hoopsworld.firebaseapp.com",
  projectId: "lacoprats-hoopsworld",
  storageBucket: "lacoprats-hoopsworld.appspot.com",
  messagingSenderId: "110168494037",
  appId: "1:110168494037:web:2f175d221de4af5838375c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)