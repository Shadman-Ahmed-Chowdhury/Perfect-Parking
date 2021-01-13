import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCq2TYqU_OWUjRpeCPxVe4T7QBYXk2H_1M",
  authDomain: "perfect-parking-21614.firebaseapp.com",
  projectId: "perfect-parking-21614",
  storageBucket: "perfect-parking-21614.appspot.com",
  messagingSenderId: "1070556749778",
  appId: "1:1070556749778:web:a050395cbf344b088b320b",
};

//Initialize Firebase
const fireConfig = firebase.initializeApp(firebaseConfig);

export default fireConfig;
