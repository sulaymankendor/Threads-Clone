import { Avatar, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import Comment from "./Comment";

function CommentSection({ verticalMargin }) {
  return (
    <div className={`w-full border border-gray-800 ${verticalMargin}`}>
      <div className="flex items-center w-full p-2 border-b-[0.5px] border-gray-800">
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
    </div>
  );
}

export default CommentSection;
