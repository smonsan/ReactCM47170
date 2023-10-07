import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZGkKrEBor-71FWterIbElXMfEPlUNzAw",
  authDomain: "e-commerce-coder-d6750.firebaseapp.com",
  projectId: "e-commerce-coder-d6750",
  storageBucket: "e-commerce-coder-d6750.appspot.com",
  messagingSenderId: "526298654607",
  appId: "1:526298654607:web:6e69216a55cf498c21cdfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//creamos la constante base de datos para que se inicie con la configuracion de la nube firestore
export const db = getFirestore(app);