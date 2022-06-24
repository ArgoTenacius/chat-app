import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwxvHTmSUxiPe2PcfUGCsXqmL3kfhaR-8",
  authDomain: "chat-app-argo.firebaseapp.com",
  projectId: "chat-app-argo",
  storageBucket: "chat-app-argo.appspot.com",
  messagingSenderId: "871204739590",
  appId: "1:871204739590:web:80c2aaf212b79598f1c187",
  measurementId: "G-N6ETXKYGJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
//Firebase emulator
//connectDatabaseEmulator(db, "localhost", 9000)