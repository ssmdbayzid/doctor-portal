// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeHbE4S1td_UPnE7YVx7pd2_9_zvbOQuI",
  authDomain: "doctor-portal-71aa7.firebaseapp.com",
  projectId: "doctor-portal-71aa7",
  storageBucket: "doctor-portal-71aa7.appspot.com",
  messagingSenderId: "957458863581",
  appId: "1:957458863581:web:5a6d5633a54621bcf31234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;