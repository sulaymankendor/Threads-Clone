import ShareIcon from "@mui/icons-material/Share";
import { Avatar, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

function Comment({
  author,
  createdAt,
  comment,
  authorProfilePic,
}: {
  author: string;
  createdAt: any;
  comment: string;
  authorProfilePic: string;
}) {
  return (
    <div className="border-y-gray-800 border-b-[0.5px] p-3 bg-gray-950 ">
      <div className="w-[90%] flex items-center mt-5">
        <Avatar alt={author} src={authorProfilePic} />
        <div className="ml-3">
          <h1 className="text-gray-200 text-md font-bold">{author}</h1>
          <p className="text-gray-300 text-[13px] mt-2">{comment}</p>
        </div>
      </div>
      <div className="w-[90%]">
        <div className="flex ml-12 mt-5">
          <IconButton
            aria-label="like"
            size="small"
            className="hover:bg-gray-700 text-gray-400 mr-2"
            title="like"
            // it will be dynamic
          >
            <FavoriteIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="comment"
            size="small"
            className="hover:bg-gray-700 text-gray-400 mr-2"
            title="comment"
          >
            <InsertCommentIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="share"
            size="small"
            className="hover:bg-gray-700 text-gray-400 mr-2"
            title="share"
          >
            <ShareIcon fontSize="small" />
          </IconButton>
        </div>
        <p className="text-zinc-500 mt-4 text-xs text-end">
          2:45pm - Nov 8, 2023
        </p>
      </div>
    </div>
  );
}

export default Comment;
