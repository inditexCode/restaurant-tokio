import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCHcupGGRVI7kU4s0VnqY2NEQHiJSUQ9LM",
  authDomain: "iniciosesion-76701.firebaseapp.com",
  projectId: "iniciosesion-76701",
  storageBucket: "iniciosesion-76701.appspot.com",
  messagingSenderId: "42221726172",
  appId: "1:42221726172:web:765091a3f5991c30c10719",
  measurementId: "G-DWT4G6WHCN"
};

// Verifica si Firebase ya está inicializado
const apps = getApps();
if (apps.length === 0) {
  console.log('Inicializando Firebase');
  initializeApp(firebaseConfig);
} else {
  console.log('Firebase ya está inicializado');
}

const app = getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence); // Establece la persistencia en el almacenamiento local

const analytics = getAnalytics(app); // Exporta Analytics si lo usas