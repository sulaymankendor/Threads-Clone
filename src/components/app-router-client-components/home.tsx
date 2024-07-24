"use client";

import Thread from "@/components/home/Thread";
import { useEffect, useState } from "react";
import { app } from "../../../lib/firebase-config";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import ThreadSkeleton from "../reusable-components/ThreadSkeleton";

// This is a Client Component (same as components in the `pages` directory)
// It receives data as props, has access to state and effects, and is
// prerendered on the server during the initial page load.
export default function Home() {
  const auth = getAuth();
  const db = getFirestore(app);
  const [threads, setThreads] = useState<
    | {
        id: string;
        author: string;
        content: string;
        profilePicture: string;
        createdAt: any;
      }[]
    | []
  >([]);
  useEffect(() => {
    if (auth.currentUser?.uid) {
      const allThreads = doc(db, "allThreads", auth.currentUser.uid);
      const thread = collection(allThreads, "threadList");
      const q = query(thread);

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //@ts-ignore
        setThreads(docs);
      });
      // Cleanup listener on unmount
      return () => unsubscribe();
    }
  });
  return (
    <section className="h-[91vh] overflow-y-scroll flex flex-col items-center w-full">
      <h1 className="text-white text-2xl font-bold w-[90%] my-8">Home</h1>
      {threads.length === 0 ? (
        <>
          <ThreadSkeleton />
          <ThreadSkeleton />
          <ThreadSkeleton />
          <ThreadSkeleton />
          <ThreadSkeleton />
          <ThreadSkeleton />
        </>
      ) : (
        <>
          {threads.map((thread) => {
            return (
              <Thread
                key={thread.id}
                author={thread.author}
                content={thread.content}
                profilePicture={thread.profilePicture}
                createdAt={thread.createdAt}
              />
            );
          })}
        </>
      )}
      {/* <ThreadSkeleton /> */}
    </section>
  );
}
