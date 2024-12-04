import firebase from "firebase/app";
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCprxAsBXvJ2kqmAT9uchZNdP8S3Q97B1c",
  authDomain: "vue-compo-api.firebaseapp.com",
  projectId: "vue-compo-api",
  storageBucket: "vue-compo-api.firebasestorage.app",
  messagingSenderId: "951088595088",
  appId: "1:951088595088:web:0921f9bd0af396ad8c1815"
};

firebase.initializeApp(firebaseConfig) 

let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db,timestamp };