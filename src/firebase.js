import firebase from "firebase/compat/app"; // Use 'compat' for Firebase v9 or above
import "firebase/compat/firestore"; // Use 'compat' for Firebase v9 or above
import "firebase/compat/auth"; // Use 'compat' for Firebase v9 or above

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAltspacN2BbyK1W4wsLi-plUWEA3-dHQ",
  authDomain: "clone-c5e62.firebaseapp.com",
  projectId: "clone-c5e62",
  storageBucket: "clone-c5e62.appspot.com",
  messagingSenderId: "686510424202",
  appId: "1:686510424202:web:602dfc55168c752580ad73",
  measurementId: "G-65PGJJ0PRD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
