import { useState } from "react";

import CreateAnAccount from "./CreateAnAccount";
import SignIn from "./SignIn";

function Authentication() {
  const [signInSignOutTransitionValues, setSignInSignOutTransitionValues] =
    useState("translate-x-[0px]");

  return (
    <>
      <div className="z-10 rounded-2xl bg-white fixed top-[2vh] left-[35vw] w-[400px] p-11 overflow-x-hidden">
        <div
          className={`flex w-[750px] justify-between ${signInSignOutTransitionValues} transition-all`}
        >
          <SignIn slideToSignUp={setSignInSignOutTransitionValues} />
          <CreateAnAccount slideToSignIn={setSignInSignOutTransitionValues} />
        </div>
      </div>
      <div className="bg-black fixed left-0 right-0 top-0 bottom-0 opacity-100"></div>
    </>
  );
}

export default Authentication;
