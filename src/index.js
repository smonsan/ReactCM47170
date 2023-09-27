import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

/* 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig); */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
