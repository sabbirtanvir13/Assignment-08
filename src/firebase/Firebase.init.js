// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4LVayAGpvVJwmNv3YCMR4e2LVN9K_h5E",
  authDomain: "hero-io-f4eda.firebaseapp.com",
  projectId: "hero-io-f4eda",
  storageBucket: "hero-io-f4eda.firebasestorage.app",
  messagingSenderId: "278175938808",
  appId: "1:278175938808:web:7db238a2d8fb39fa48630d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);