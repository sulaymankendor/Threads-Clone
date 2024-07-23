"use client";
import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
export function ContinueButton({
  isSubmittingUserInfo,
}: {
  isSubmittingUserInfo: boolean;
}) {
  return (
    <LoadingButton
      loading={isSubmittingUserInfo}
      className={
        "flex text-center justify-center p-[6px] rounded text-xs font-semibold text-gray-100 w-full bg-violet-600 hover:bg-violet-500"
      }
      type="submit"
    >
      Continue
    </LoadingButton>
  );
}
