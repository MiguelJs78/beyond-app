
// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { auth } from 'firebase/auth';
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9fgMxirM8OlzLo7VagXeGQHST_KFPxgw",
  authDomain: "beyond-app-ficr.firebaseapp.com",
  projectId: "beyond-app-ficr",
  storageBucket: "beyond-app-ficr.appspot.com",
  messagingSenderId: "327461679955",
  appId: "1:327461679955:web:7b09713bb4037c8ad967a6"
};

