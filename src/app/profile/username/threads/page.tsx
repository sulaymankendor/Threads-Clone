"use client";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

import MyThread from "@/components/profile-components/MyThread";
import { app } from "../../../../../lib/firebase-config";
import ThreadSkeleton from "@/components/reusable-components/ThreadSkeleton";
import { CurrentAuthUserInfoContext } from "@/components/provider/Providers";

function Threads() {
  const auth = getAuth();
  const db = getFirestore(app);
  const [myThreads, setMyThreads] = useState([]);
  const [noThreads, setNoThreads] = useState(false);
  const currentAuthUserInfo = useContext(CurrentAuthUserInfoContext);
  useEffect(() => {
    const userId = currentAuthUserInfo?.currentAuthUserInfo.uid;
    if (!userId) return;

    // Reference to the "threadList" subcollection
    const threadListRef = collection(db, "allThreads", userId, "threadList");

    // Listen for real-time updates in the collection
    const unsubscribe = onSnapshot(threadListRef, (snapshot) => {
      if (!snapshot.empty) {
        setNoThreads(false);

        // Map through documents and extract data
        const threads = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //@ts-ignore
        setMyThreads(threads);
      } else {
        setNoThreads(true);
        setMyThreads([]);
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [auth?.currentUser?.uid]);

  // if (noThreads) {
  //   return (
  //     <section className="flex flex-col w-full">
  //       {/* <p className="font-bold text-base py-16 text-white w-[90%] mx-auto">
  //         👋 Welcome! It looks like you haven't created any Threads yet. ✍️
  //         Start sharing your thoughts and experiences with the community by
  //         clicking 'Create Thread'. We're excited to see what you have to share!
  //         🚀
  //       </p> */}
  //       <p className="font-bold text-base py-16 text-white w-[90%] mx-auto">
  //         {`👋 Welcome! It looks like you haven't created any Threads yet. ✍️ Start sharing your thoughts and experiences with the community by clicking 'Create Thread'. We're excited to see what you have to share! 🚀`}
  //       </p>
  //     </section>
  //   );
  // }
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
                  threadID={myThread.id}
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
