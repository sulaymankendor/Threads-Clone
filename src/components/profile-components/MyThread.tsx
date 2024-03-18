import { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, AvatarGroup, IconButton } from "@mui/material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

import CommentSection from "../reusable-components/CommentSection";

const avatarWidthHeight = 20;

function MyThread() {
  const [showCommentSection, setShowCommentSection] = useState(false);

  return (
    <div>
      <div className="bg-zinc-900 w-[87%] rounded ml-12 flex p-6 my-7 flex-col mb-5">
        <div className="flex items-center">
          <div className="flex items-center">
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              className="self-start"
              sx={{ width: 45, height: 45 }}
            />
            <div className="ml-2">
              <p className="text-white text-md">Jerry Smith</p>
              <p className="text-gray-300 text-sm w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <IconButton
            aria-label="delete"
            size="small"
            color="primary"
            className="mt-[-40px]"
            title="delete"
          >
            <DeleteIcon fontSize="inherit" className="fill-red-400" />
          </IconButton>
        </div>

        <div className="flex ml-12 mt-5">
          <IconButton
            aria-label="like"
            size="small"
            className="hover:bg-gray-700 text-gray-300 mr-2"
            title="like"
            //it will be dynamic
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
            sx={{ width: avatarWidthHeight, height: avatarWidthHeight }}
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: avatarWidthHeight, height: avatarWidthHeight }}
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: avatarWidthHeight, height: avatarWidthHeight }}
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: avatarWidthHeight, height: avatarWidthHeight }}
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: avatarWidthHeight, height: avatarWidthHeight }}
          />
        </AvatarGroup>
      </div>
      <div className="ml-12 w-[87%]">
        {showCommentSection && (
          <CommentSection
            verticalMargin={"mt-[0px] mb-4"}
            closeShowCommentsSection={setShowCommentSection}
          />
        )}
      </div>
    </div>
  );
}

export default MyThread;
