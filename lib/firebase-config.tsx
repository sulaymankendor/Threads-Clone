import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
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

// Conditionally initialize Analytics
isSupported()
  .then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
      console.log("Analytics initialized");
    } else {
      console.warn("Analytics is not supported in this environment.");
    }
  })
  .catch((error) => {
    console.error("Error checking analytics support:", error);
  });
