import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import ThreadsLogo from "@/svg/ThreadsLogo";
import { SignInFormInput } from "../../../utilities/types";
import ContinueButton from "../reusable-components/ContinueButtons";
import { signInUserSchema } from "../../../utilities/authenticationSchema";
import { SubmitHandler } from "react-hook-form";
import ContinueWithGithubAndGoogleButton from "../reusable-components/ContinueWithGithubOrGoogleButton";

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
  // const handleSignInUser: SubmitHandler<SignInFormInput> = (data) =>
  //   console.log(data);

  return (
    <div className="flex flex-col w-[317px]">
      <ThreadsLogo />
      <h1 className="font-bold ">Sign in</h1>
      <p className="text-gray-500 text-sm">to continue to Threads</p>
      <div className="flex flex-col mt-8">
        <ContinueWithGithubAndGoogleButton />
      </div>
      <p className="self-center mt-3">or</p>
      <div>
        {/* <form action="post" onSubmit={handleSubmit(handleSignInUser)}> */}
        <form action="psot">
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
          <ContinueButton
            onClick={() => {
              console.log("");
            }}
          />
        </form>
        <p className="text-xs text-gray-500 font-semibold mt-7">
          Have an account?{" "}
          <button
            onClick={() => {
              clearErrors();
              reset();
              slideToSignUp("translate-x-[-435px]");
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
