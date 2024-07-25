// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHQIkUzCX5IohhT2HJIfB5NGY998mW54M",
  authDomain: "unplash-5cdae.firebaseapp.com",
  projectId: "unplash-5cdae",
  storageBucket: "unplash-5cdae.appspot.com",
  messagingSenderId: "599797245216",
  appId: "1:599797245216:web:d71ec6c62ca52be64da345"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDB  = getFirestore(app)