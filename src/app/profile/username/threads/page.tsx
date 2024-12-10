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
    if (auth.currentUser?.uid) {
      // Reference the specific document inside "threadList"
      const specificDoc = doc(
        db,
        "allThreads",
        auth.currentUser.uid,
        "threadList",
        "specificDocId" // Replace "specificDocId" with the actual document ID if dynamic
      );

      // Listen for changes in the specific document
      const unsubscribe = onSnapshot(specificDoc, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setNoThreads(false);

          // If the document is expected to contain an array of threads
          if (Array.isArray(data?.threads)) {
            setMyThreads(
              //@ts-ignore
              data.threads.map((thread, index) => ({ id: index, ...thread }))
            );
          } else {
            // Handle other data formats if needed
            //@ts-ignore
            setMyThreads([{ id: snapshot.id, ...data }]);
          }
        } else {
          // If the document does not exist
          setNoThreads(true);
          setMyThreads([]);
        }
      });

      // Cleanup listener on unmount
      return () => unsubscribe();
    }
  }, [auth?.currentUser?.uid, db]);

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
