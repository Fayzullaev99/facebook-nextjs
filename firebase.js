// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFr08-pfoOwcNnAw2WhQlm0YdrkgOf8HU",
  authDomain: "facebook-nextjs-27507.firebaseapp.com",
  projectId: "facebook-nextjs-27507",
  storageBucket: "facebook-nextjs-27507.appspot.com",
  messagingSenderId: "1071402711890",
  appId: "1:1071402711890:web:78f7c1e904e800d329588b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export {db,storage}