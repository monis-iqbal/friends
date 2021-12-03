import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {getFirestore , doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkcYRZ2IBuR1ksBrRJ8vdDpqoTcaGGcik",
  authDomain: "friends-53dfc.firebaseapp.com",
  projectId: "friends-53dfc",
  storageBucket: "friends-53dfc.appspot.com",
  messagingSenderId: "356004502531",
  appId: "1:356004502531:web:b80abccf429b175f14c236",
  measurementId: "G-M2PN67DT4B"
};


const app = initializeApp(firebaseConfig); 
const auth = getAuth();
const db = getFirestore();

export{
    auth, 
    createUserWithEmailAndPassword,

    db, 
    doc,
    setDoc
}