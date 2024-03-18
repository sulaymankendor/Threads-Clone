import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useContext } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { app } from "../../../lib/firebase-config";
import ThreadsLogo from "@/svg/ThreadsLogo";
import { SubmitHandler } from "react-hook-form";
import { CreateAccountFormInput } from "../../../utilities/types";
import ContinueButton from "../reusable-components/ContinueButton";
import { createUserAccountSchema } from "../../../utilities/authenticationSchema";
import ContinueWithGithubAndGoogleButton from "../reusable-components/ContinueWithGithubOrGoogleButton";
import { useRouter } from "next/router";
import { ShowOnBoardingModalContext } from "@/pages/_app";

function CreateAnAccount({
  slideToSignIn,
}: {
  slideToSignIn: Dispatch<SetStateAction<string>>;
}) {
  const router = useRouter();
  const auth = getAuth(app);
  const showOnBoardingModal = useContext(ShowOnBoardingModalContext);
  const {
    reset,
    clearErrors,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFormInput>({
    resolver: zodResolver(createUserAccountSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const handleCreateUserAccount: SubmitHandler<CreateAccountFormInput> = (
    data
  ) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: data.name,
        });
        showOnBoardingModal?.setShowOnBoardingModal(true);
        router.push("/?Onboarding", undefined, { shallow: true });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="flex flex-col w-[312px] mt-[-30px] h-[666px] overflow-y-scroll">
      <ThreadsLogo />
      <h1 className="font-bold ">Create an Account</h1>
      <p className="text-gray-500 text-sm">to continue to Threads</p>
      <div className="flex flex-col mt-5">
        <ContinueWithGithubAndGoogleButton />
      </div>
      <p className="self-center -mb-2">or</p>
      <div>
        <form action="post" onSubmit={handleSubmit(handleCreateUserAccount)}>
          <div className="flex flex-col mb-5 mt-1">
            <label className="text-xs font-semibold text-gray-500 mb-1">
              Name
            </label>
            <input
              disabled={false}
              className="border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1 text-sm"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name?.message && (
              <p className="text-xs font-semibold text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-xs font-semibold text-gray-500 mb-1">
              Email Address
            </label>
            <input
              disabled={false}
              type="email"
              className="text-sm border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1"
              {...register("email", {
                required: true,
                maxLength: 100,
              })}
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
              disabled={false}
              className="text-sm border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1"
              {...register("password", {
                required: true,
                maxLength: 100,
              })}
              type="password"
            />
            {errors.password?.message && (
              <p className="text-xs font-semibold text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-xs font-semibold text-gray-500 mb-1">
              Confirm Password
            </label>
            <input
              disabled={false}
              className="text-sm border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1"
              {...register("confirmPassword", {
                required: true,
                maxLength: 100,
              })}
              type="password"
            />
            {errors.confirmPassword?.message && (
              <p className="text-xs font-semibold text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <ContinueButton
            onClick={() => {
              console.log(handleSubmit(handleCreateUserAccount));
            }}
          />
        </form>
        <p className="text-xs text-gray-500 font-semibold mt-4">
          Have an account?{" "}
          <button
            onClick={() => {
              clearErrors();
              reset();

              slideToSignIn("translate-x-[0px]");
            }}
            disabled={false}
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
