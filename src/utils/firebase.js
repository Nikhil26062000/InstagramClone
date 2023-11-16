// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApCXezbMUvUu1nFU2SXBRYRFpjodBnYp0",
  authDomain: "instagramclone-4c9ff.firebaseapp.com",
  projectId: "instagramclone-4c9ff",
  storageBucket: "instagramclone-4c9ff.appspot.com",
  messagingSenderId: "606056938492",
  appId: "1:606056938492:web:fdf8446e7a15a002e95079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
