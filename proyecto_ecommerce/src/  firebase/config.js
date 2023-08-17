// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxS5jVNSCAGTViEunWTpBLp4NNVat9pec",
  authDomain: "e-commerce-wonderbike.firebaseapp.com",
  projectId: "e-commerce-wonderbike",
  storageBucket: "e-commerce-wonderbike.appspot.com",
  messagingSenderId: "155307439501",
  appId: "1:155307439501:web:b160815342350c0d33b9c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);