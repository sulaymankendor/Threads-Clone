import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtzCSWZI_g-n2quLHWVkY9GYgPhorAuHQ",
  authDomain: "threads-web-app.firebaseapp.com",
  projectId: "threads-web-app",
  storageBucket: "threads-web-app.appspot.com",
  messagingSenderId: "79574604258",
  appId: "1:79574604258:web:4da4e4518c31415e2c81bb",
  measurementId: "G-QLKT5HZZLF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
