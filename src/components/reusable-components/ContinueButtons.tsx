"use client";
export function ContinueButton({ onClick }: { onClick: any }) {
  return (
    <button
      className={
        "flex text-center justify-center p-[6px] rounded text-xs font-semibold text-gray-100 w-full bg-violet-600 hover:bg-violet-500"
      }
      onClick={onClick}
    >
      {/* {onSubmit ? (
        <Oval strokeWidth={5} width={"20px"} height={"20px"} />
      ) : (
      )} */}
      <p className="uppercase font-normal">Continue</p>
    </button>
  );
}

import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";

export function SpinnerButton() {
  return (
    <LoadingButton
      // loading={true}
      className="text-[17px] capitalize bg-violet-600 w-[90%] text-gray-200 hover:bg-violet-500 mt-8"
    >
      Continue
    </LoadingButton>
  );
}
