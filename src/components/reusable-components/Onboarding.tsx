//@ts-ignore
import { v4 } from "uuid";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

function Onboarding() {
  const auth = getAuth();
  const storage = getStorage();
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  return (
    <div className="z-10 fixed top-[15vh] left-[30vw] w-[530px] overflow-x-hidden">
      <h1 className="text-gray-200 font-bold text-2xl">Onboarding</h1>
      <h3 className="text-gray-200 text-sm">
        Complete your profile now, to use Threads.
      </h3>
      <div className="bg-gray-950 p-4">
        in
        <div className="flex items-center my-5">
          <Avatar alt="Remy Sharp" src={""} sx={{ width: 80, height: 80 }} />
          <label
            htmlFor="profile-picture-selecter"
            className="text-gray-300 cursor-pointer ml-3 hover:text-gray-400"
          >
            select profile image
          </label>
          <input
            id="profile-picture-selecter"
            type="file"
            className="hidden"
            onChange={(event) => {
              const storageRef = ref(
                storage,
                //@ts-ignore
                `users-profile-picture/${v4()}${profilePicture?.name}`
              );
              //@ts-ignore
              uploadBytes(storageRef, profilePicture).then((snapshot) => {
                getDownloadURL(ref(storage, snapshot.ref.name))
                  .then((url) => {
                    // `url` is the download URL for 'images/stars.jpg'
                    console.log(url);

                    // // This can be downloaded directly:
                    // const xhr = new XMLHttpRequest();
                    // xhr.responseType = "blob";
                    // xhr.onload = (event) => {
                    //   const blob = xhr.response;
                    // };
                    // xhr.open("GET", url);
                    // xhr.send();

                    // // Or inserted into an <img> element
                    // const img = document.getElementById("myimg");
                    // img.setAttribute("src", url);
                  })
                  .catch((error) => {
                    // Handle any errors
                  });

                if (auth.currentUser) {
                  updateProfile(auth.currentUser, {
                    photoURL: "",
                  })
                    .then(() => {
                      // Profile updated!
                      // ...
                    })
                    .catch((error) => {
                      // An error occurred
                      // ...
                    });
                }
                if (event.target.files) {
                  setProfilePicture(event.target.files[0]);
                }
              });
            }}
          />
        </div>
        <div className="flex flex-col ml-2 w-[95%]">
          <label className="text-lg font-medium text-gray-200 mb-1">Bio</label>
          <textarea className="bg-zinc-900 text-gray-200 w-full mt-2 rounded p-3 max-h-52 min-h-[208px] outline-none" />
        </div>
        <button
          onClick={() => {}}
          className="mt-5 ml-2 text-center justify-center p-[6px] rounded text-sm font-semibold text-gray-100 w-[95%] bg-violet-600 hover:bg-violet-500"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
