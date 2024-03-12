// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUH3fT5iFowB1a1g4jwuskBzHO-_-ucrA",
  authDomain: "testapp-74ec5.firebaseapp.com",
  projectId: "testapp-74ec5",
  storageBucket: "testapp-74ec5.appspot.com",
  messagingSenderId: "556998153470",
  appId: "1:556998153470:web:87b178fbac79f0382501af",
  measurementId: "G-8C2SGD6V8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);