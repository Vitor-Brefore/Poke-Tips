import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGfX81lxF-GIpNsf59L-YJTJ2K0C5sBsA",
  authDomain: "poketips-da3f3.firebaseapp.com",
  projectId: "poketips-da3f3",
  storageBucket: "poketips-da3f3.appspot.com",
  messagingSenderId: "909724968815",
  appId: "1:909724968815:web:344157af4c89613c02aa9a",
  measurementId: "G-JYV53M7C0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
