// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAW1z7yHuU9OY-e4QqHrrSJtGl8DbniWM",
    authDomain: "start-clothing.firebaseapp.com",
    projectId: "start-clothing",
    storageBucket: "start-clothing.appspot.com",
    messagingSenderId: "944661124085",
    appId: "1:944661124085:web:59167b749c9bc1f21a86bc",
    measurementId: "G-JE0LS1P373",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore1.Firestore object
