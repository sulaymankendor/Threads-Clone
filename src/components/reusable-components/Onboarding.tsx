"use client";
// @ts-ignore
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import Dropzone from "react-dropzone";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../../../lib/firebase-config";
import { Button } from "@mui/material";

function Onboarding() {
  const auth = getAuth();
  const [imageSrc, setImageSrc] = useState("");
  const storage = getStorage();
  const db = getFirestore(app);
  const [showShadow, setShowShadow] = useState(false);
  const [previewProfilePicture, setPreviewProfilePicture] = useState<
    string[] | undefined
  >(undefined);
  const [profilePictureToUpload, setProfilePictureToUpload] = useState<
    [File] | null
  >(null);
  const [bio, setBio] = useState("");
  useEffect(() => {
    setPreviewProfilePicture(
      profilePictureToUpload?.map((file) => URL.createObjectURL(file))
    );
  }, [profilePictureToUpload]);

  return (
    <div className="z-10 fixed top-[vh] left-[30vw] w-[530px] overflow-x-hidden">
      <h1 className="text-gray-200 font-bold text-2xl">Onboarding</h1>
      <h3 className="text-gray-200 text-sm">
        Complete your profile now, to use Threads.
      </h3>
      <div className="bg-gray-950 p-4">
        <div className="my-5">
          <Dropzone
            onDrop={(acceptedFiles) =>
              setProfilePictureToUpload([acceptedFiles[0]])
            }
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="cursor-pointer w-36 h-36 relative border-[1.5px] border-gray-200 rounded-full p-1"
                onMouseOver={() => {
                  setShowShadow(true);
                }}
                onMouseOut={() => {
                  setShowShadow(false);
                }}
              >
                <input {...getInputProps()} accept="image/*" />
                <img
                  src={
                    previewProfilePicture
                      ? previewProfilePicture[0]
                      : "/default-profile-picture/default-profile-picture.jpg"
                  }
                  alt="sd"
                  className="rounded-full h-full object-cover w-full"
                />
                {showShadow && (
                  <>
                    <div className=" z-20 h-full w-full bg-black absolute top-0 rounded-full opacity-20"></div>
                  </>
                )}
              </div>
            )}
          </Dropzone>
          {previewProfilePicture && (
            <Button
              onClick={() => {
                setPreviewProfilePicture(undefined);
              }}
              sx={{
                textTransform: "capitalize",
                ":hover": {
                  color: "#669dd3",
                },
              }}
            >
              use default profile picture
            </Button>
          )}
        </div>
        <div className="flex flex-col ml-2 w-[95%]">
          <label className="text-lg font-medium text-gray-200 mb-1">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
            className="bg-zinc-900 text-gray-200 w-full mt-2 rounded p-3 max-h-52 min-h-[208px] outline-none"
          />
        </div>
        <button
          onClick={() => {
            const storageRef = ref(
              storage,
              `user-profile-picture/${profilePictureToUpload?.[0].name}${v4()}`
            );
            // 'file' comes from the Blob or File API
            if (profilePictureToUpload) {
              uploadBytes(storageRef, profilePictureToUpload[0]).then(
                (snapshot) => {
                  getDownloadURL(snapshot.ref).then(async (url) => {
                    await addDoc(collection(db, "users"), {
                      uid: auth.currentUser?.uid,
                      name: auth.currentUser?.displayName,
                      email: auth.currentUser?.email,
                      profilePicture: url,
                      bio: bio,
                    });
                  });
                }
              );
            }
          }}
          className="mt-5 ml-2 text-center justify-center p-[6px] rounded text-sm font-semibold text-gray-100 w-[95%] bg-violet-600 hover:bg-violet-500"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
