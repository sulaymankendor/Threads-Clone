import ThreadsLogo from "@/svg/ThreadsLogo";
import ContinueWithGithubOrGoogleButton from "../reusable-components/ContinueWithGithubOrGoogleButton";
import { LoadingButton } from "@mui/lab";

function SignIn({ slideToSignUp }) {
  return (
    <div className="flex flex-col w-[317px]">
      <ThreadsLogo />
      <h1 className="font-bold ">Sign in</h1>
      <p className="text-gray-500 text-sm">to continue to Threads</p>
      <div className="flex flex-col mt-8">
        <ContinueWithGithubOrGoogleButton accountName="Github" />
        <ContinueWithGithubOrGoogleButton accountName="Google" />
      </div>
      <p className="self-center mt-3">or</p>
      <div>
        <form action="post">
          <div className="flex flex-col mb-5">
            <label className="text-xs font-semibold text-gray-500 mb-1">
              Email Address
            </label>
            <input className="text-sm border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1" />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-xs font-semibold text-gray-500 mb-1">
              Password
            </label>
            <input className="text-sm border rounded fous:outline-[0.1px] px-3 outline-gray-300 outline-1 py-1" />
          </div>
          <LoadingButton
            // loading={true}
            className="text-xs bg-violet-600 w-full text-gray-100 hover:bg-violet-500"
          >
            Continue
          </LoadingButton>
        </form>
        <p className="text-xs text-gray-500 font-semibold mt-7">
          Have an account?{" "}
          <button
            onClick={() => {
              slideToSignUp("translate-x-[0px]");
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
