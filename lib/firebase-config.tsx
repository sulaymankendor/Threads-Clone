// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOjpySrT_Yaqt3qHDbQ029c3zNYDPZ9Eo",
  authDomain: "threads-39824.firebaseapp.com",
  projectId: "threads-39824",
  storageBucket: "threads-39824.appspot.com",
  messagingSenderId: "481746442987",
  appId: "1:481746442987:web:33a94a3139d49619313cae",
  measurementId: "G-MB97BSMNWE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
