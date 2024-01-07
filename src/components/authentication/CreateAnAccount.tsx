import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../../lib/firebase-config";

import ThreadsLogo from "@/svg/ThreadsLogo";
import ContinueButton from "../reusable-components/ContinueButton";
import FormErrorMsg from "../reusable-components/FormErrorMsg";
import ContinueWithGithubAndGoogleButton from "../reusable-components/ContinueWithGithubOrGoogleButton";

function CreateAnAccount({ slideToSignIn }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [onSubmit, setOnSubmit] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [showFormErrorMsg, setShowFormErrorMsg] = useState("hidden");
  const [disableInputs, setDisableInputs] = useState(false);
  const [disableSignInBtn, setDisableSignInBtn] = useState(false);

  const auth = getAuth(app);
  useEffect(() => {
    if (username && email && password && confirmPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [username, email, password, confirmPassword]);
  return (
    <div className="flex flex-col w-[312px] mt-[-20px] h-[630px] overflow-y-scroll">
      <ThreadsLogo />
      <h1 className="font-bold ">Create an Account</h1>
      <p className="text-gray-500 text-sm">to continue to Threads</p>
      <div className="flex flex-col mt-5">
        <ContinueWithGithubAndGoogleButton />
      </div>
      <p className="self-center mt-3">or</p>

      <FormErrorMsg
        showFormErrorMsg={showFormErrorMsg}
        message={formErrorMessage}
        setShowFormErrorMsg={setShowFormErrorMsg}
      />
      <div>
        <form
          action="post"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col mb-5 mt-1">
            <label className="text-xs font-semibold text-gray-500 mb-1">
              Username
            </label>
            <input
              disabled={disableInputs}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              value={username}
              className="border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1 text-sm"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-xs font-semibold text-gray-500 mb-1">
              Email Address
            </label>
            <input
              disabled={disableInputs}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
              type="email"
              className="text-sm border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-xs font-semibold text-gray-500 mb-1">
              Password
            </label>
            <input
              disabled={disableInputs}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
              className="text-sm border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-xs font-semibold text-gray-500 mb-1">
              Confirm Password
            </label>
            <input
              disabled={disableInputs}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              value={confirmPassword}
              className="text-sm border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1"
            />
          </div>
          <ContinueButton
            disabled={isDisabled}
            submit={() => {
              if (username && email && password && confirmPassword) {
                if (email.includes("@")) {
                  if (password === confirmPassword) {
                    setDisableSignInBtn(true);
                    setDisableInputs(true);
                    setIsDisabled(true);
                    setOnSubmit(true);
                    createUserWithEmailAndPassword(auth, email, password)
                      .then((userCredential) => {
                        setDisableSignInBtn(false);
                        setDisableInputs(false);
                        setIsDisabled(false);
                        setOnSubmit(false);
                        setUsername("");
                        setEmail("");
                        setPassword("");
                        setConfirmPassword("");
                        // const user = userCredential.user;
                      })
                      .catch((error) => {
                        // const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage);
                      });
                  } else {
                    setShowFormErrorMsg("block");
                    setFormErrorMessage("Passwords do not match.");
                  }
                }
              }
            }}
            onSubmit={onSubmit}
          />
        </form>
        <p className="text-xs text-gray-500 font-semibold mt-7">
          Have an account?{" "}
          <button
            onClick={() => {
              slideToSignIn("translate-x-[0px]");
            }}
            disabled={disableSignInBtn}
            className="text-violet-500 hover:text-violet-800"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

export default CreateAnAccount;
