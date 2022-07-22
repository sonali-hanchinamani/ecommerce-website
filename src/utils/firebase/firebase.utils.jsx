import { initializeApp} from 'firebase/app';
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA1em73H9GVGg4061Tb4uzvzQTLt_UaSn0",
    authDomain: "clothing-db-95739.firebaseapp.com",
    projectId: "clothing-db-95739",
    storageBucket: "clothing-db-95739.appspot.com",
    messagingSenderId: "34967767692",
    appId: "1:34967767692:web:09a795b5078d49dc9909a9",
    measurementId: "G-Y6P3HH4QVD"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
 
  const provider = new GoogleAuthProvider();
 
  provider.setCustomParameters({
      prompy: "select_account"
  });

  export const auth= getAuth();
  export const signInWithPopup =()=> signInWithPopup(auth, provider);

  
