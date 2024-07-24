"use client";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import MyThread from "@/components/profile-components/MyThread";
import { app } from "../../../../../lib/firebase-config";
import ThreadSkeleton from "@/components/reusable-components/ThreadSkeleton";

function Threads() {
  const auth = getAuth();
  const db = getFirestore(app);
  const [myThreads, setMyThreads] = useState([]);
  useEffect(() => {
    if (auth.currentUser?.uid) {
      const allThreads = collection(db, "allThreads");
      const thread = collection(allThreads, auth.currentUser.uid, "threadList");
      const q = query(thread);

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //@ts-ignore
        setMyThreads(docs);
        // console.log(docs);
      });
      // Cleanup listener on unmount
      return () => unsubscribe();
    }
  });
  return (
    <section className="flex flex-col w-full">
      {myThreads.length === 0 ? (
        <div className="w-[90%] mx-auto py-9">
          {[...Array(5)].map((_, index) => (
            <ThreadSkeleton key={index} marginTop={"-mt-2"} />
          ))}
        </div>
      ) : (
        <>
          {myThreads.map(
            (myThread: {
              id: string;
              profilePicture: string;
              content: string;
              author: string;
              createdAt: any;
            }) => {
              return (
                <MyThread
                  key={myThread.id}
                  content={myThread.content}
                  author={myThread.author}
                  profilePicture={myThread.profilePicture}
                  createdAt={myThread.createdAt}
                />
              );
            }
          )}
        </>
      )}
    </section>
  );
}

export default Threads;
