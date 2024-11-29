// firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCprxAsBXvJ2kqmAT9uchZNdP8S3Q97B1c",
  authDomain: "vue-compo-api.firebaseapp.com",
  projectId: "vue-compo-api",
  storageBucket: "vue-compo-api.firebaseapp.com",
  messagingSenderId: "951088595088",
  appId: "1:951088595088:web:0921f9bd0af396ad8c1815",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };