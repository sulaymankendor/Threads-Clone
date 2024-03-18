import { useState } from "react";
import { Avatar } from "@mui/material";

function EditCurrentUserInfo() {
  const [username, setUsername] = useState("amanda lee");
  const [email, setEmail] = useState("amanda.lee@example.com");
  const [password, setPassword] = useState("sulayman");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [originalPassword, setOriginalPassword] = useState("");

  return (
    <div className="flex flex-col w-full mt-11 ml-12 mb-8">
      <div className="-mt-2">
        <h1 className="text-3xl text-gray-200">Account</h1>
        <p className="text-sm text-gray-400">Manage your account settings</p>
      </div>
      <h1 className="mt-5 text-gray-100 pb-4 border-b-[0.5px] border-gray-600 text-xl">
        Profile
      </h1>
      <div className="mt-3">
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 65, height: 65 }}
        />
      </div>
      <div className="mt-4">
        <h1 className="border-b-[0.5px] border-gray-600 text-gray-100 pb-4 mt-1">
          Name
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
          <div className="flex mt-2">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              placeholder="new pasword..."
              disabled={!changePassword}
              className="px-2 text-gray-400 text-sm ml-3 outline-none bg-transparent"
            />

            <input type="checkbox" className="cursor-pointer ml-2" />
          </div>
          {changePassword && (
            <div className="flex mt-3">
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                value={confirmPassword}
                type="password"
                // disabled
                placeholder="confirm pasword..."
                className="px-2 text-gray-400 text-sm ml-3 outline-none bg-transparent"
              />
              <input type="checkbox" className="cursor-pointer ml-2" />
            </div>
          )}
        </div>
        <button
          className="text-gray-200 text-xs mt-4"
          onClick={() => {
            if (!changePassword) {
              setOriginalPassword(password);
              setPassword("");
            } else {
              setPassword(originalPassword);
            }
            setChangePassword((changePassword) => !changePassword);
          }}
        >
          {changePassword ? "Use Original Password" : "Change Password"}
        </button>
      </div>
    </div>
  );
}

export default EditCurrentUserInfo;
