"use client";
import Button from "@/components/reusable-components/LoadingButton";
import { createThread } from "../../../utilities/createThread";
import { useContext, useState, useEffect } from "react";
import { CurrentAuthUserInfoContext } from "@/components/provider/Providers";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { app } from "../../../lib/firebase-config";
import { getAuth } from "firebase/auth";
import { Toaster } from "react-hot-toast";

function CreateAPost() {
  const db = getFirestore(app);
  const auth = getAuth();
  const currentAuthUserInfo = useContext(CurrentAuthUserInfoContext);
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isCreatingThread, setIsCreatingThread] = useState(false);

  useEffect(() => {
    if (content) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [content]);
  return (
    <>
      <Toaster />
      <section className="h-[91vh] overflow-y-scroll flex flex-col items-center w-full">
        <h1 className="text-white text-2xl font-bold w-[90%] my-8">
          Create Thread
        </h1>
        <label className="text-gray-200 w-[90%]">Content</label>
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
          className="bg-zinc-900 text-gray-200 w-[90%] mt-2 rounded p-3 max-h-52 min-h-[208px] outline-none"
        />

        <Button
          disabled={disabled}
          createThread={() =>
            createThread(
              content,
              currentAuthUserInfo?.currentAuthUserInfo.profilePicture,
              currentAuthUserInfo?.currentAuthUserInfo.name,
              setIsCreatingThread
            )
          }
          iscreatingThread={isCreatingThread}
        />
      </section>
    </>
  );
}

export default CreateAPost;
