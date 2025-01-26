import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD25rs6i7wQCT72EUzsMbjMCtaGahRgRa8",
  authDomain: "reactlinktree-be94f.firebaseapp.com",
  projectId: "reactlinktree-be94f",
  storageBucket: "reactlinktree-be94f.firebasestorage.app",
  messagingSenderId: "772416802435",
  appId: "1:772416802435:web:a99759f663cc5b92ab55b6",
  measurementId: "G-18836M749V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
