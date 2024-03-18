import { useEffect } from "react";
import ListedCommunity from "@/components/listed-community/ListedCommunity";

function Communities() {
  useEffect(() => {
    const avatars = document.getElementsByClassName(
      "css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar"
    );
    for (let i = 0; i < avatars.length; i++) {
      // @ts-ignore
      avatars[i].style.width = "20px";
      // @ts-ignore
      avatar[i].style.height = "20px";
    }
  }, []);
  return (
    <section className="h-[91vh] overflow-y-scroll flex flex-col items-center w-full">
      <h1 className="text-white text-2xl font-bold w-[90%] my-8">
        Communities
      </h1>
      <div className="flex w-[90%] items-center mb-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-12 text-gray-400 bg-zinc-900 p-1"
          style={{
            width: "40px",
            borderTopLeftRadius: "7px",
            borderBottomLeftRadius: "7px",
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          placeholder="Search for Communities..."
          className="bg-zinc-900 text-white p-3 w-full outline-none"
          style={{
            borderTopRightRadius: "7px",
            borderBottomRightRadius: "7px",
          }}
        />
      </div>
      <div className="h-[70vh] overflow-y-scroll w-full ml-2">
        <div className="w-full flex flex-wrap ">
          <ListedCommunity />
          <ListedCommunity />
          <ListedCommunity />
          <ListedCommunity />
          <ListedCommunity />
          <ListedCommunity />
          <ListedCommunity />
        </div>
      </div>
    </section>
  );
}

export default Communities;
