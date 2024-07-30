import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyBHFy824lhc-J1CRWC6DR4Z9x6iMlEUgpM",
  authDomain: "reserva-326eb.firebaseapp.com",
  projectId: "reserva-326eb",
  storageBucket: "reserva-326eb.appspot.com",
  messagingSenderId: "576873409670",
  appId: "1:576873409670:web:e9d37e9ae90f30815ff507",
  measurementId: "G-D4740GJ3T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);