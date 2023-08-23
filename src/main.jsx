import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX9gp6weS2Y7tFfBJYOOzX1C5ziwQOuVY",
  authDomain: "samana-transformaciones.firebaseapp.com",
  projectId: "samana-transformaciones",
  storageBucket: "samana-transformaciones.appspot.com",
  messagingSenderId: "889469494585",
  appId: "1:889469494585:web:48f5c67f330808338334e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
