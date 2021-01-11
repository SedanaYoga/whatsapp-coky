import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0gT8S3pLaQ8SFLgXRR4ngK7zWX1JS55M",
  authDomain: "whatsapp-clone-515a0.firebaseapp.com",
  projectId: "whatsapp-clone-515a0",
  storageBucket: "whatsapp-clone-515a0.appspot.com",
  messagingSenderId: "1042742209583",
  appId: "1:1042742209583:web:00dad1066a106e93a26ada",
  measurementId: "G-54RNK31C4W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
