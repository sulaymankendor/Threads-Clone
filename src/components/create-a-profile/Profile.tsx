import { Avatar } from "@mui/material";
import React, { useState } from "react";

function Profile() {
  const [username, setUsername] = useState("amanda lee");
  const [email, setEmail] = useState("amanda.lee@example.com");
  const [password, setPassword] = useState("dskskk");
  return (
    <div className="flex flex-col w-full mt-11 ml-12 mb-8">
      <div>
        <h1 className="text-sm font-medium text-gray-300 mb-4">Account</h1>
      </div>
      <div>
        <h1 className="text-3xl text-gray-200">Account</h1>
        <p className="text-sm text-gray-400">Manage your account settings</p>
      </div>
      <h1 className="mt-5 text-gray-100 pb-4 border-b-[0.5px] border-gray-600">
        Profile
      </h1>
      <div className="flex items-center mt-3">
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <h1 className="text-gray-300 text-xs font-semibold ml-2">Amanda Lee</h1>
      </div>
      <div className="mt-4">
        <h1 className="border-b-[0.5px] border-gray-600 text-gray-100 pb-4 mt-6">
          Username
        </h1>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          className="px-2 text-gray-400 text-sm ml-3 outline-none bg-transparent"
        />
      </div>
      <div>
        <h1 className="border-b-[0.5px] border-gray-600 text-gray-100 pb-4 mt-6">
          Email Addresses
        </h1>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          className="w-[40%] px-2 text-gray-400 text-sm ml-3 outline-none bg-transparent"
        />
      </div>
      <div>
        <h1 className="border-b-[0.5px] border-gray-600 text-gray-100 pb-4 mt-6">
          Password
        </h1>
        <div className="flex flex-col">
          <div className="flex">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              // disabled
              className="px-2 text-gray-400 text-sm ml-3 outline-none bg-transparent"
            />

            <input type="checkbox" className="cursor-pointer ml-2" />
          </div>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            // disabled
            className="w-[31.3%] px-2 text-gray-400 text-sm ml-3 outline-none bg-transparent"
          />
        </div>
        <button className="text-gray-200 text-xs">Change password</button>
      </div>
    </div>
  );
}

export default Profile;
