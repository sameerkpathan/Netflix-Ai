// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNZpteXRhmtXbihmWgulcso5_FIqzD7Og",
  authDomain: "netflix-ai-5c1a7.firebaseapp.com",
  projectId: "netflix-ai-5c1a7",
  storageBucket: "netflix-ai-5c1a7.firebasestorage.app",
  messagingSenderId: "239374643891",
  appId: "1:239374643891:web:b1465e593db29b213c76c6",
  measurementId: "G-FWG9FPFTXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);