import { useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Link from "next/link";
import { useRouter } from "next/router";
function ProfileLayout() {
  const route = useRouter();
  console.log(route);
  const [backgroundColorOfThreadsButton, setBackgroundColorOfThreadsButton] =
    useState("");
  const [backgroundColorOfRepliesButton, setBackgroundColorOfRepliesButton] =
    useState("");
  const [backgroundColorOfTaggedButton, setBackgroundColorOfTaggedButton] =
    useState("");
  useState("");
  useEffect(() => {
    if (route.asPath.split("/")[2] === "threads") {
      setBackgroundColorOfThreadsButton("bg-gray-800 hover:bg-gray-800");
    } else if (route.asPath.split("/")[2] === "replies") {
      setBackgroundColorOfRepliesButton("bg-gray-800 hover:bg-gray-800");
    } else if (route.asPath.split("/")[2] === "tagged") {
      setBackgroundColorOfTaggedButton("bg-gray-800 hover:bg-gray-800");
    }
  }, [route.route]);
  const [alignment, setAlignment] = useState<string | null>("left");
  const widthValue = 500;
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };
  useEffect(() => {
    const k = document.getElementsByClassName(
      "css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar"
    );
    for (let i = 0; i < k.length; i++) {
      // @ts-ignore
      k[i].style.width = "20px";
      // @ts-ignore
      k[i].style.height = "20px";
    }
  }, []);
  return (
    <div className="w-full">
      <div className="w-full flex justify-between mt-9 items-center">
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
          className="transition-all bg-zinc-900 hover:bg-blue-600 py-2 px-3 rounded capitalize mr-12 text-gray-300 flex items-center justify-between"
        >
          <EditIcon className="text-gray-300 mr-1" />
          <p>Edit</p>
        </Link>
      </div>
      <p className="text-gray-300 ml-12 my-4">Code + Design</p>
      <div className="border-b-[1px] border-b-zinc-900 w-[87%] ml-12 mt-14"></div>
      <div className="mt-10 ml-12">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          className="bg-zinc-900 w-[93%]"
          color="primary"
          sx={{ width: 663, height: 35 }}
        >
          <Button
            value="left"
            aria-label="left aligned"
            sx={{ width: widthValue }}
            className={`${backgroundColorOfThreadsButton} transition-none`}
            onClick={() => {
              route.replace("/profile/threads");
            }}
          >
            <CommentOutlinedIcon className="text-gray-500 w-5" />
            <p className="text-gray-300 capitalize ml-3">Threads</p>
            <p
              className="bg-zinc-600 px-1 ml-3 text-sm rounded-sm text-gray-400"
              style={{ height: "19px" }}
            >
              1
            </p>
          </Button>
          <Button
            value="center"
            aria-label="centered"
            sx={{ width: widthValue }}
            className={`${backgroundColorOfRepliesButton} transition-none`}
            onClick={() => {
              route.replace("/profile/replies");
            }}
          >
            <PeopleOutlineIcon className="text-gray-500 w-5" />
            <p className="text-gray-300 capitalize ml-2">Replies</p>
          </Button>
          <Button
            value="right"
            aria-label="right aligned"
            sx={{ width: widthValue }}
            className={`${backgroundColorOfTaggedButton} transition-none`}
            onClick={() => {
              route.replace("/profile/tagged");
            }}
          >
            <LocalOfferOutlinedIcon className="text-gray-500 w-5" />
            <p className="text-gray-300 capitalize ml-2">Tagged</p>
          </Button>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}

export default ProfileLayout;
