import Link from "next/link";
import { Avatar } from "@mui/material";

function Communities() {
  return (
    <div className="flex justify-between w-full mt-7 items-center">
      <div className="flex items-center">
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          className="ml-3"
        />
        <div className="ml-1">
          <h3 className="text-gray-200 text-sm font-bold">JS Mastery</h3>
          <p className="text-gray-500 text-xs">@js-mastery</p>
        </div>
      </div>
      <Link
        href={"/"}
        className="text-sm transition-all bg-violet-500 hover:bg-violet-400 text-white px-4 py-1 rounded mr-3"
      >
        View
      </Link>
    </div>
  );
}

export default Communities;
