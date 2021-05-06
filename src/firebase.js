import firebase from "firebase/app";
import 'firebase/firestore';
//import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcPWLW6D0lZqB-FyT0Fdtz1XUi0nhS2Zo",
  authDomain: "wobclone-3d29b.firebaseapp.com",
  projectId: "wobclone-3d29b",
  storageBucket: "wobclone-3d29b.appspot.com",
  messagingSenderId: "225553916464",
  appId: "1:225553916464:web:55185a4c2423e19956c3f5",
  measurementId: "G-RN8PBF6BH7"

})

/*const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID

}) */

//export const auth = app.auth();
const db = firebaseApp.firestore();
export { db };

/*
 apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
 */