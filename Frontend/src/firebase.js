
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,signOut } from "firebase/auth";
import { getDatabase,ref, set,onValue,push,child, get,onChildAdded, onChildChanged, onChildRemoved} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAkYCpAjoaA6SsbdVrt8nlQkzuiDfDlNnk",
  authDomain: "mahmud-builders.firebaseapp.com",
  projectId: "mahmud-builders",
  storageBucket: "mahmud-builders.appspot.com",
  messagingSenderId: "638066349131",
  appId: "1:638066349131:web:0da5f29357fbe52df7a9ce",
  measurementId: "G-1JNH114T2M"
};


const app = initializeApp(firebaseConfig);
export const myDb = getFirestore(app)

const auth = getAuth()
const database = getDatabase();
export {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,
              updateProfile,database,ref,set,
               signOut,onValue,push,child, get,
               onChildAdded, onChildChanged, onChildRemoved}