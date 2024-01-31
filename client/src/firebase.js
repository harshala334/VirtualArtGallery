// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "virtual-art-gallery-56e63.firebaseapp.com",
    projectId: "virtual-art-gallery-56e63",
    storageBucket: "virtual-art-gallery-56e63.appspot.com",
    messagingSenderId: "566757548230",
    appId: "1:566757548230:web:f3407781dd3de2f7bf37c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);