// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs4jwN_TLXUYo_TTGFPAsqwDZpGpnPiE4",
  authDomain: "buffalo-app-3058b.firebaseapp.com",
  projectId: "buffalo-app-3058b",
  storageBucket: "buffalo-app-3058b.appspot.com",
  messagingSenderId: "280242906037",
  appId: "1:280242906037:web:8d45d081b6c8205541effc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const firestore = getFirestore();
