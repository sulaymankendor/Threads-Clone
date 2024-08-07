"use client";
import Link from "next/link";
import { Avatar, AvatarGroup } from "@mui/material";
import { useEffect } from "react";

function ListedCommunity() {
  return (
    <div className="bg-zinc-900 p-5 rounded w-[43%] ml-8 mb-6 ">
      <div className="flex items-center">
        <Avatar
          sx={{ width: 46, height: 46 }}
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          className="ml-3"
        />
        <div className="ml-1">
          <h3 className="text-gray-200 text-sm font-bold">JS Mastery</h3>
          <p className="text-gray-500 text-xs">@js-mastery</p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-3 mt-11">
        <Link
          href={"/"}
          className="text-md transition-all bg-violet-500 hover:bg-violet-400 text-white px-4 py-1 rounded mr-3 no-underline"
        >
          View
        </Link>
        <AvatarGroup
          max={4}
          spacing="medium"
          renderSurplus={(surplus) => (
            <span className="text-sm ml-[6px]">{surplus.toString()[0]}k</span>
          )}
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
    </div>
  );
}

export default ListedCommunity;
