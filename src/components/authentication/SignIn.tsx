import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import ThreadsLogo from "@/svg/ThreadsLogo";
import { SignInFormInput } from "../../../utilities/types";
import { signInUserSchema } from "../../../utilities/authenticationSchema";
import { SubmitHandler } from "react-hook-form";
import ContinueWithGithubAndGoogleButton from "../reusable-components/ContinueWithGithubOrGoogleButton";
import { ContinueButton } from "../reusable-components/ContinueButtons";
import LockSVG from "@/svg/LockSVG";
import NetworkErrorSVG from "@/svg/NetworkErrorSVG";
import { ShowAuthenticationModalContext } from "../provider/Providers";

function SignIn({
  slideToSignUp,
}: {
  slideToSignUp: Dispatch<SetStateAction<string>>;
}) {
  const {
    reset,
    clearErrors,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInput>({
    resolver: zodResolver(signInUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const auth = getAuth();
  const [networkErrorMsg, setNetworkErrorMsg] = useState("");
  const [isSubmittingUserInfo, setIsSubmittingUserInfo] = useState(false);
  const [invalidCredential, setInvalidCredential] = useState("");
  const showAuthenticationModal = useContext(ShowAuthenticationModalContext);
  const handleSignInUser: SubmitHandler<SignInFormInput> = (data) => {
    setIsSubmittingUserInfo(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        setInvalidCredential("");
        setNetworkErrorMsg("");
        // Signed in
        const user = userCredential.user;
        setIsSubmittingUserInfo(false);
        showAuthenticationModal?.setShowAuthenticationModal(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsSubmittingUserInfo(false);
        if (errorMessage.includes("(auth/invalid-credential)")) {
          setInvalidCredential("The credential you entered is invalid");
        } else if (errorMessage.includes("(auth/network-request-failed)")) {
          setNetworkErrorMsg(
            "Request failed, please check you network and try again."
          );
        }
      });
  };

  return (
    <div className="flex flex-col w-[44%] overflow-y-scroll pb-7">
      <h1 className="font-bold ">Sign in</h1>
      <p className="text-gray-500 text-sm">to continue to Threads</p>
      <div className="flex flex-col mt-8">
        <ContinueWithGithubAndGoogleButton />
      </div>
      <p className="self-center mt-3">or</p>
      <div>
        <form action="post" onSubmit={handleSubmit(handleSignInUser)}>
          <div className="flex flex-col mb-5">
            <label className="text-xs font-semibold text-gray-500 mb-1">
              Email Address
            </label>
            <input
              {...register("email", {
                required: true,
                maxLength: 100,
              })}
              className="text-sm border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1"
            />
            {errors.email?.message && (
              <p className="text-xs font-semibold text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-xs font-semibold text-gray-500 mb-1">
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                maxLength: 100,
              })}
              type="password"
              className="text-sm border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1"
            />
            {errors.password?.message && (
              <p className="text-xs font-semibold text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <ContinueButton isSubmittingUserInfo={isSubmittingUserInfo} />
        </form>
        {invalidCredential && (
          <div className="flex items-center mt-3">
            <LockSVG />
            <p className="text-xs font-semibold text-red-500">
              {invalidCredential}
            </p>
          </div>
        )}
        {networkErrorMsg && (
          <div className="flex items-center mt-4">
            <NetworkErrorSVG />
            <p className="text-xs font-bold text-red-600">{networkErrorMsg}</p>
          </div>
        )}
        <p className="text-xs text-gray-500 font-semibold mt-7">
          Don't have an account?{" "}
          <button
            onClick={() => {
              clearErrors();
              reset();
              setInvalidCredential("");
              setNetworkErrorMsg("");
              slideToSignUp("translate-x-[-56%]");
            }}
            className="text-violet-500 hover:text-violet-800"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
