"use client";
import { useState } from "react";

import SignIn from "./SignIn";
import CreateAnAccount from "./CreateAnAccount";

function Authentication() {
  const [signInSignOutTransitionValues, setSignInSignOutTransitionValues] =
    useState("translate-x-[0px]");
  return (
    <div className="z-10 rounded-2xl bg-white fixed top-[1.5vh] left-[35vw] w-[400px] p-11 overflow-hidden h-[98vh]">
      <div
        className={`flex w-[750px] justify-between ${signInSignOutTransitionValues} transition-all`}
      >
        <SignIn slideToSignUp={setSignInSignOutTransitionValues} />
        <CreateAnAccount slideToSignIn={setSignInSignOutTransitionValues} />
      </div>
    </div>
  );
}

export default Authentication;
