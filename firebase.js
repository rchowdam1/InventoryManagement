// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzj9zWzKjxAy3t1i63KeAkB62rxpVANl4",
  authDomain: "inventory-management-c9ec0.firebaseapp.com",
  projectId: "inventory-management-c9ec0",
  storageBucket: "inventory-management-c9ec0.appspot.com",
  messagingSenderId: "323786129532",
  appId: "1:323786129532:web:a3cb500e0edbb9618309f9",
  measurementId: "G-DC4WKWFBJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}