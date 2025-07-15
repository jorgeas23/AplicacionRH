import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyB3R0iE8L1Gckx7SeUAENMxiH6iW0wiFww",
  authDomain: "aplicacion-rh.firebaseapp.com",
  projectId: "aplicacion-rh",
  storageBucket: "aplicacion-rh.firebasestorage.app",
  messagingSenderId: "562997418753",
  appId: "1:562997418753:web:8df21615dc48be65ea1900",
  measurementId: "G-QX6JXDENTN"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const db = getFirestore(app);

export { auth, provider, db };
