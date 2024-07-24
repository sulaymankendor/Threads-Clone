import { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Avatar, colors, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

import CommentSection from "../reusable-components/CommentSection";

function Thread({
  author,
  content,
  profilePicture,
  createdAt,
}: {
  author: string;
  content: string;
  profilePicture: string;
  createdAt: any;
}) {
  const [showCommentsSection, setShowCommentsSection] = useState(false);

  return (
    <>
      <div className="flex bg-zinc-900 w-[90%] rounded-md flex-col p-[13px] mb-9">
        <div className="flex">
          <Avatar alt="Remy Sharp" src={profilePicture} />
          <div className="ml-4">
            <p className="text-white">{author}</p>
            <p className="text-gray-300 text-sm w-[98%] mt-1">{content}</p>
          </div>
        </div>

        <div className="flex ml-12 mt-5">
          <IconButton
            aria-label="like"
            size="small"
            className="mr-2"
            title="like"
            sx={{
              color: "#d1d5db",
              ":hover": {
                backgroundColor: "#494949",
              },
            }}
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
            className="mr-2"
            sx={{
              color: "#d1d5db",
              ":hover": {
                backgroundColor: "#494949",
              },
            }}
            title="comment"
            onClick={() => {
              if (showCommentsSection) {
                setShowCommentsSection(false);
              } else {
                setShowCommentsSection(true);
              }
            }}
          >
            <InsertCommentIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="share"
            size="small"
            className="mr-2"
            title="share"
            sx={{
              color: "#d1d5db",
              ":hover": {
                backgroundColor: "#494949",
              },
            }}
          >
            <ShareIcon fontSize="small" />
          </IconButton>
        </div>
        <p className="text-zinc-500 mt-4 text-xs text-end">
          2:45pm - Nov 8, 2023
        </p>
      </div>
      <div className="w-[90%]">
        {showCommentsSection && (
          <CommentSection
            verticalMargin={"mt-[-23px] mb-4"}
            closeShowCommentsSection={setShowCommentsSection}
          />
        )}
      </div>
    </>
  );
}

export default Thread;
