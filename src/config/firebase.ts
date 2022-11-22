// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD9nZofjvl_mLQLfvihBrK_TrG8-ey-os",
  authDomain: "learning-react-8a630.firebaseapp.com",
  projectId: "learning-react-8a630",
  storageBucket: "learning-react-8a630.appspot.com",
  messagingSenderId: "353061601898",
  appId: "1:353061601898:web:e749191bc2354bc8d04013",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
