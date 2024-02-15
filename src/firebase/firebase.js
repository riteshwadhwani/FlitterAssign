import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.F_API,
  authDomain: "happy-a0110.firebaseapp.com",
  projectId: "happy-a0110",
  storageBucket: "happy-a0110.appspot.com",
  messagingSenderId: "451117946199",
  appId: "1:451117946199:web:2a7dd8385125fcbf65da12"
};
export const provider = new GoogleAuthProvider();
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
