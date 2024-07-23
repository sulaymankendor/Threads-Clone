"use client";
import { useContext, useEffect, useState } from "react";

import SignIn from "./SignIn";
import CreateAnAccount from "./CreateAnAccount";
import { ShowDarkOverlayContext } from "../provider/Providers";

function Authentication() {
  const [signInSignOutTransitionValues, setSignInSignOutTransitionValues] =
    useState("translate-x-[0px]");
  const showDarkOverlay = useContext(ShowDarkOverlayContext);
  useEffect(() => {
    showDarkOverlay?.setShowDarkOverlay(false);
  }, []);
  return (
    <>
      <div className="rounded-2xl bg-white fixed top-[1.5vh] left-[30vw] z-20 w-[40vw] pt-11 pl-14 overflow-hidden h-[90vh]">
        <div
          className={`flex w-[200%] h-full justify-between ${signInSignOutTransitionValues} transition-all`}
        >
          <SignIn slideToSignUp={setSignInSignOutTransitionValues} />
          <CreateAnAccount slideToSignIn={setSignInSignOutTransitionValues} />
        </div>
      </div>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-black z-10"></div>
    </>
  );
}

export default Authentication;
