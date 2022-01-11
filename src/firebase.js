import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCoHigqgQy6w-6-pYJqH4VIYVpvQzbt_w",
    authDomain: "eshop-23738.firebaseapp.com",
    projectId: "eshop-23738",
    storageBucket: "eshop-23738.appspot.com",
    messagingSenderId: "433629198582",
    appId: "1:433629198582:web:1b306f8c263bd1cc7094d7",
    measurementId: "G-CF7TPXPY67"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

