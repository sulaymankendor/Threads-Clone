import React from "react";

import Profile from "./Profile";

function CreateProfile() {
  return (
    <div className="z-10 rounded-2xl bg-gray-800 fixed top-[5vh] left-[30vw] w-[530px] overflow-x-hidden">
      <div className="flex justify-between">
        <Profile />
      </div>
    </div>
  );
}

export default CreateProfile;
