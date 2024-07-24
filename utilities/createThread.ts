import { getAuth } from "firebase/auth";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";
import { app } from "../lib/firebase-config";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
const auth = getAuth();
const db = getFirestore(app);
export const createThread = async (
  content: string,
  profilePicture: string,
  author: string,
  setIsCreatingThread: Dispatch<SetStateAction<boolean>>
) => {
  setIsCreatingThread(true);
  if (auth.currentUser?.uid) {
    const allThreads = doc(db, "allThreads", auth.currentUser.uid);
    setDoc(allThreads, {
      createdAt: serverTimestamp(),
      description: "This document contains all threads.",
    })
      .then(() => {
        const thread = collection(allThreads, "threadList");
        addDoc(thread, {
          profilePicture,
          content,
          author,
          createdAt: serverTimestamp(),
        })
          .then(() => {
            toast.success("Successfully created a Thread");
            setIsCreatingThread(false);
            // You can perform additional actions here
          })
          .catch((error) => {
            alert("something happened");
            setIsCreatingThread(false);
            console.error("Error writing document: ", error.message);
            setIsCreatingThread(false);
            // Handle the error, e.g., show it to the user
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
