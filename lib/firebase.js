import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB2IcnpAHFv_n49kvK7IN_yXNuAt16XQTc",
  authDomain: "nextfire-app-83d63.firebaseapp.com",
  projectId: "nextfire-app-83d63",
  storageBucket: "nextfire-app-83d63.appspot.com",
  messagingSenderId: "862594766252",
  appId: "1:862594766252:web:374dea960fd904e5435609",
  measurementId: "G-66MVJR2NJJ"
};

const app = initializeApp(firebaseConfig);

if (app.name && typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
}

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore();