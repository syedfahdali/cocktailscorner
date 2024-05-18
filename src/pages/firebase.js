// firebase.js
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCjHBBdnO44nG6_DmJGrofRd2gK3moewr8",
  authDomain: "cocktail-corner.firebaseapp.com",
  projectId: "cocktail-corner",
  storageBucket: "cocktail-corner.appspot.com",
  messagingSenderId: "543043394160",
  appId: "1:543043394160:web:b686cfc457576101aab2b5",
  measurementId: "G-N2EETC7P0T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { app, auth,db };
