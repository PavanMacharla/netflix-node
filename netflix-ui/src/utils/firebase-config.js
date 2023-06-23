

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNOGa9H-YPcVuXnZGPXsCOwUd0-vMCFlM",
  authDomain: "netflix-clone-1f40a.firebaseapp.com",
  projectId: "netflix-clone-1f40a",
  storageBucket: "netflix-clone-1f40a.appspot.com",
  messagingSenderId: "819979408921",
  appId: "1:819979408921:web:326092e4edaa57367c3c88",
  measurementId: "G-P6G7QWSGQE"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);