// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from 'firebase/auth';
import { getFirestore, addDoc, collection, doc, getDoc, getDocs, onSnapshot} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRaYQX1fuxBRQ3095tP8y0zVOySQaf2nE",
  authDomain: "greeni-af195.firebaseapp.com",
  projectId: "greeni-af195",
  storageBucket: "greeni-af195.appspot.com",
  messagingSenderId: "100853219530",
  appId: "1:100853219530:web:b666bb4ef6be1e66653433",
  measurementId: "G-W0JG3QDFHR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const typeConsumer = collection(db, 'type-consumer');

// CREATE
export const saveTypeConsumer = (uid, type) => {
  addDoc(typeConsumer, { uid, type })
}

export const getTypes = () => {
  getDocs(typeConsumer);
};

export const getAllTypes = (querySnapshot) => {
  onSnapshot( typeConsumer, querySnapshot);
};

// funcion para acceder a una publicación
export const getType = (uid) => {
  const docRef = doc(typeConsumer, uid);
  const docSnap = getDoc(docRef);
  return docSnap;
};