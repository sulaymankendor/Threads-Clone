import Link from "next/link";
import { Avatar } from "@mui/material";

function User({
  user,
}: {
  user: {
    id: string;
    bio: string;
    email: string;
    name: string;
    profilePicture: string;
    uid: string;
  };
}) {
  return (
    <div className="flex justify-between w-full mt-3 mb-7 items-center">
      <div className="flex items-center">
        <Avatar alt={user?.name} src={user?.profilePicture} className="ml-3" />
        <div className="ml-1">
          <h3 className="text-gray-200 text-sm font-bold">{user?.name}</h3>
          <p className="text-gray-500 text-xs">@{user?.bio}</p>
        </div>
      </div>
      <Link
        href={"/"}
        className="text-sm transition-all bg-violet-500 hover:bg-violet-400 text-white px-4 py-1 rounded mr-3 no-underline"
      >
        View
      </Link>
    </div>
  );
}

export default User;
