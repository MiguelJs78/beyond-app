import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9fgMxirM8OlzLo7VagXeGQHST_KFPxgw",
  authDomain: "beyond-app-ficr.firebaseapp.com",
  projectId: "beyond-app-ficr",
  storageBucket: "beyond-app-ficr.appspot.com",
  messagingSenderId: "327461679955",
  appId: "1:327461679955:web:7b09713bb4037c8ad967a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth,signInWithEmailAndPassword };
