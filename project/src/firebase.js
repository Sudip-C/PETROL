// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMlzyQsiSaIoya2K_NrvBHImKoHUCc3K8",
  authDomain: "petrol-ebd3f.firebaseapp.com",
  projectId: "petrol-ebd3f",
  storageBucket: "petrol-ebd3f.appspot.com",
  messagingSenderId: "165983912332",
  appId: "1:165983912332:web:5f99093d497d6c4b9656a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);