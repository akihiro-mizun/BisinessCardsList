import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default db;