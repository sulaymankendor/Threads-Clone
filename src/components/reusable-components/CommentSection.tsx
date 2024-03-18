import { LoadingButton } from "@mui/lab";
import { Dispatch, SetStateAction } from "react";
import { Avatar, IconButton } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import Comment from "./Comment";

function CommentSection({
  verticalMargin,
  closeShowCommentsSection,
}: {
  verticalMargin: string;
  closeShowCommentsSection: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`w-full border border-gray-800 ${verticalMargin} flex flex-col bg-gray-950`}
    >
      <>
        <div className="flex items-center w-full p-2 border-b-[0.5px] border-gray-800 bg-black">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <input
            placeholder="Comment..."
            className="bg-black w-[90%] p-3 outline-none text-gray-200 ml-2"
          />
          <LoadingButton
            //   loading
            className="bg-violet-500 text-white rounded-full capitalize"
          >
            Post
          </LoadingButton>
        </div>
        <div className="h-[70vh] overflow-y-scroll bg-gray-950">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </>
      {/* <Button
        className="self-end rounded-full"
        onClick={() => {
          closeShowCommentsSection(false);
        }}
      >
        <ExpandLessIcon />
      </Button> */}
      <IconButton
        className="self-end rounded-full"
        aria-label="expandless comment section"
        onClick={() => {
          closeShowCommentsSection(false);
        }}
        sx={{
          color: "GrayText",
          ":hover": {
            backgroundColor: "#1f1f1f",
          },
          marginRight: 1,
          marginBottom: 0.5,
        }}
      >
        <ExpandLessIcon />
      </IconButton>
    </div>
  );
}

export default CommentSection;
