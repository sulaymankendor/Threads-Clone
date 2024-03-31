"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { usePathname } from "next/navigation";
import { ToggleButtonGroup } from "../reusable-components/ToggleGroup";

const widthValue = 500;

function ProfileLayout() {
  const pathName = usePathname();
  const router = useRouter();
  const [alignment, setAlignment] = useState<string | null>("left");
  const [backgroundColorOfThreadsButton, setBackgroundColorOfThreadsButton] =
    useState("");
  const [backgroundColorOfRepliesButton, setBackgroundColorOfRepliesButton] =
    useState("");
  const [backgroundColorOfTaggedButton, setBackgroundColorOfTaggedButton] =
    useState("");

  useEffect(() => {
    const listOfUsersComments = document.getElementsByClassName(
      "css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar"
    );
    for (
      let currentUser = 0;
      currentUser < listOfUsersComments.length;
      currentUser++
    ) {
      // @ts-ignore
      listOfUsersComments[currentUser].style.width = "20px";
      // @ts-ignore
      listOfUsersComments[currentUser].style.height = "20px";
    }
  }, []);

  useEffect(() => {
    if (pathName?.split("/")[2] === "threads") {
      setBackgroundColorOfThreadsButton("bg-gray-800 hover:bg-gray-800");
    } else if (pathName?.split("/")[2] === "replies") {
      setBackgroundColorOfRepliesButton("bg-gray-800 hover:bg-gray-800");
    } else if (pathName?.split("/")[2] === "tagged") {
      setBackgroundColorOfTaggedButton("bg-gray-800 hover:bg-gray-800");
    }
  }, [pathName]);

  return (
    <div className="w-full">
      <div className="flex justify-between mt-9 items-center w-[92%] mx-auto">
        <div className="flex ml-12 items-center">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 60, height: 60 }}
          />
          <div className="ml-2">
            <p className="text-gray-200 font-bold">Jerry Smith</p>
            <p className="text-gray-500 text-sm">@smith</p>
          </div>
        </div>
        <Link
          href={"/profile/edit-profile"}
          className="transition-all bg-zinc-900 hover:bg-indigo-600 py-2 px-3 rounded capitalize mr-12 text-gray-300 flex items-center justify-between"
        >
          <EditIcon className="text-gray-300 mr-1" />
          <p>Edit</p>
        </Link>
      </div>
      <p className="text-gray-300 ml-20 my-4">Code + Design</p>
      <div className="border-b-[1px] border-b-zinc-900 w-[92%] mx-auto mt-14"></div>
      <div className="mt-10 mx-auto w-[92%]">
        <ToggleButtonGroup />
      </div>
    </div>
  );
}

export default ProfileLayout;
