"use client";

import Thread from "@/components/home/Thread";
import { useEffect, useState } from "react";
import { app } from "../../../lib/firebase-config";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
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
    const homeThreads = collection(db, "homeThreads");
    const q = query(homeThreads, orderBy("createdAt", "desc")); // Order by date descending
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
  }, []);

  return (
    <section className="h-[91vh] overflow-y-scroll flex flex-col items-center w-full">
      <h1 className="text-white text-2xl font-bold w-[90%] my-8">Home</h1>
      {threads.length === 0 ? (
        <div className="w-[90%] max-sm:w-[100%]">
          {[...Array(5)].map((_, index) => (
            <ThreadSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          {threads.map((thread) => {
            return (
              <Thread
                key={thread.id}
                id={thread.id}
                author={thread.author}
                content={thread.content}
                profilePicture={thread.profilePicture}
                createdAt={thread.createdAt}
              />
            );
          })}
        </>
      )}
    </section>
  );
}
