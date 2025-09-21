// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "studio-85711170-23f8c",
  appId: "1:494851100543:web:8d18491143df437256544a",
  apiKey: "AIzaSyBejvq9bXDtdDuCRVwjPmV4JkFgtXzvJo0",
  authDomain: "studio-85711170-23f8c.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "494851100543",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
