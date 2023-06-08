// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJBJklmccKGHNRl88Kuvyz7pi9yIgWp3k",
  authDomain: "fashion-design-auth.firebaseapp.com",
  projectId: "fashion-design-auth",
  storageBucket: "fashion-design-auth.appspot.com",
  messagingSenderId: "78651128865",
  appId: "1:78651128865:web:bf84b2315b2bcd9dbb7760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app