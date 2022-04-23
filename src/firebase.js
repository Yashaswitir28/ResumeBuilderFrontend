// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGZ3B88boz9ibpUTPiAOy-lmSI3t3f9Jg",
  authDomain: "resume-builder-8a09e.firebaseapp.com",
  projectId: "resume-builder-8a09e",
  storageBucket: "resume-builder-8a09e.appspot.com",
  messagingSenderId: "853006323533",
  appId: "1:853006323533:web:bb1d0011cf4488168ab104",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
// export const db = getDatabase(app);
