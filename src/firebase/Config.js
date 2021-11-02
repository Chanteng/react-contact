import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyAgqAy2M-J1iFyaE6grG2Dfagff0FpwV4g",
  authDomain: "react-contacts-21d1e.firebaseapp.com",
  projectId: "react-contacts-21d1e",
  storageBucket: "react-contacts-21d1e.appspot.com",
  messagingSenderId: "256776626010",
  appId: "1:256776626010:web:efa1ef851cadb95e551d63"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;