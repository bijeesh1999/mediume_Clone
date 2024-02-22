// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGa7ka45OGvWxKnaQQbOQZv3ILCWreb4E",
  authDomain: "mediume-blog-demo.firebaseapp.com",
  projectId: "mediume-blog-demo",
  storageBucket: "mediume-blog-demo.appspot.com",
  messagingSenderId: "104083693894",
  appId: "1:104083693894:web:8617a980f1a333c6888547",
  measurementId: "G-N6JBGRPDWE"
};

// Initialize Firebase
const auth = initializeApp(firebaseConfig);
export const authentication = getAuth(auth);
export default auth;