// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCV8dcuaWLiwPV8GYRib41Er6Bq6iMhDww",
    authDomain: "cartzila-fe54a.firebaseapp.com",
    projectId: "cartzila-fe54a",
    storageBucket: "cartzila-fe54a.appspot.com",
    messagingSenderId: "151417185386",
    appId: "1:151417185386:web:195dc49ed3397d41429613",
    measurementId: "G-T79N74LB2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()