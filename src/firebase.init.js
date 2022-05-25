// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHHNsDJ4jXlLiimBN9x10rbYXJhBkw9RU",
    authDomain: "car-auto-parts-1b7b2.firebaseapp.com",
    projectId: "car-auto-parts-1b7b2",
    storageBucket: "car-auto-parts-1b7b2.appspot.com",
    messagingSenderId: "816141020651",
    appId: "1:816141020651:web:028cd0837d9af71286fdae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;