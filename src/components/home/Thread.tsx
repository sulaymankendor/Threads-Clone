import { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ShareIcon from "@mui/icons-material/Share";

import CommentSection from "../reusable-components/CommentSection";

function Thread() {
  const [showCommentSection, setShowCommentSection] = useState(false);
  return (
    <>
      <div className="flex bg-zinc-900 w-[90%] rounded-md flex-col p-[13px] mb-9">
        <div className="flex">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <div className="ml-4">
            <p className="text-white">Lambda</p>
            <p className="text-gray-300 text-sm w-[98%] mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et 🔥 dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo 🧨 consequat. Duis aute irure dolor
              in reprehenderit in
            </p>
          </div>
        </div>

        <div className="flex ml-12 mt-5">
          <IconButton
            aria-label="like"
            size="small"
            className="hover:bg-gray-700 text-gray-300 mr-2"
            title="like"
            // it will be dynamic
            onClick={(e) => {
              console.log(e);
              // if (e.target.parentElement.style.fill === "red") {
              //   e.target.parentElement.style.fill = "gray";
              // } else {
              //   e.target.parentElement.style.fill = "red";
              // }
            }}
          >
            <FavoriteIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="comment"
            size="small"
            className="hover:bg-gray-700 text-gray-300 mr-2"
            title="comment"
            onClick={() => {
              if (showCommentSection) {
                setShowCommentSection(false);
              } else {
                setShowCommentSection(true);
              }
            }}
          >
            <InsertCommentIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="share"
            size="small"
            className="hover:bg-gray-700 text-gray-300 mr-2"
            title="share"
          >
            <ShareIcon fontSize="small" />
          </IconButton>
        </div>
        <p className="text-zinc-500 mt-4 text-xs text-end">
          2:45pm - Nov 8, 2023
        </p>
      </div>
      <div className="w-[90%]">
        {showCommentSection && (
          <CommentSection verticalMargin={"mt-[-23px] mb-4"} />
        )}
      </div>
    </>
  );
}

export default Thread;
