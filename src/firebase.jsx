// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJQ9A0TSAf3c6MG0n00IRW1RZLGg3I_eE",
  authDomain: "ecommercecomfy-fe46d.firebaseapp.com",
  projectId: "ecommercecomfy-fe46d",
  storageBucket: "ecommercecomfy-fe46d.appspot.com",
  messagingSenderId: "793606623128",
  appId: "1:793606623128:web:2d7fab09a31d14ac3d25ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };