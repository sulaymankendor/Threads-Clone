import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../../lib/firebase-config";

import React, { Dispatch, SetStateAction, useState } from "react";
import { CircularProgress } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

function AlertPopUp({
  openAlertPopup,
  setOpenAlertPopup,
}: {
  openAlertPopup: boolean;
  setOpenAlertPopup: Dispatch<SetStateAction<boolean>>;
}) {
  const auth = getAuth(app);
  const [isLoggingOutCurrentAuthUser, setIsLoggingOutCurrentAuthUser] =
    useState(false);

  return (
    <>
      <Toaster />
      <AlertDialog open={openAlertPopup}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              If you log out, you will have to log in to be able to use Threads.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setOpenAlertPopup(false);
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="w-20"
              onClick={() => {
                setIsLoggingOutCurrentAuthUser(true);
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                    setIsLoggingOutCurrentAuthUser(false);
                    setOpenAlertPopup(false);
                  })
                  .catch((error) => {
                    // An error happened.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage);
                    setIsLoggingOutCurrentAuthUser(false);
                  });
              }}
            >
              {isLoggingOutCurrentAuthUser ? (
                <CircularProgress size={15} />
              ) : (
                "Continue"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default AlertPopUp;
