
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBxS5jVNSCAGTViEunWTpBLp4NNVat9pec",
  authDomain: "e-commerce-wonderbike.firebaseapp.com",
  projectId: "e-commerce-wonderbike",
  storageBucket: "e-commerce-wonderbike.appspot.com",
  messagingSenderId: "155307439501",
  appId: "1:155307439501:web:b160815342350c0d33b9c4"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);