"use client";
import { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, AvatarGroup, IconButton } from "@mui/material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import CommentSection from "../reusable-components/CommentSection";

function MyThread({
  threadID,
  content,
  profilePicture,
  author,
  createdAt,
}: {
  threadID: string,
  profilePicture: string;
  content: string;
  author: string;
  createdAt: any;
}) {
  const [showCommentSection, setShowCommentSection] = useState(false);
  return (
    <div className="w-[90%] mx-auto py-9">
      <div className="bg-zinc-900 rounded flex p-6 -mt-2 flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar
              alt="Remy Sharp"
              src={profilePicture}
              className="self-start"
              sx={{ width: 45, height: 45 }}
            />
            <div className="ml-2">
              <p className="text-white text-md capitalize">{author}</p>
              <p className="text-gray-300 text-sm">{content}</p>
            </div>
          </div>
          <IconButton
            aria-label="delete"
            size="small"
            color="error"
            className="mt-[-40px]"
            title="delete"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </div>

        <div className="flex ml-12 mt-5">
          <IconButton
            aria-label="like"
            size="small"
            className="mr-2"
            sx={{
              color: "#d1d5db",
              ":hover": {
                backgroundColor: "#494949",
              },
            }}
            title="like"
            //it will be dynamic
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
            className="mr-2"
            sx={{
              color: "#d1d5db",
              ":hover": {
                backgroundColor: "#494949",
              },
            }}
            title="share"
          >
            <ShareIcon fontSize="small" />
          </IconButton>
        </div>
        <p className="text-zinc-500 mt-4 text-xs text-end">
          2:45pm - Nov 8, 2023
        </p>
        <AvatarGroup
          max={4}
          spacing="medium"
          renderSurplus={(surplus) => (
            <span className="text-sm ml-[6px]">{surplus.toString()[0]}k</span>
          )}
          className="self-start"
        >
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </AvatarGroup>
      </div>
      <div>
        {showCommentSection && (
          <CommentSection
          threadID={threadID}
            verticalMargin={"mt-[0px] mb-4"}
            closeShowCommentsSection={setShowCommentSection}
          />
        )}
      </div>
    </div>
  );
}

export default MyThread;
