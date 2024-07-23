import { getAuth } from "firebase/auth";
import { app } from "../../../lib/firebase-config";
import { Avatar } from "@mui/material";
import DropDownMenu from "../layout/drop-down-menu/DropDownMenu";
import AlertPopUp from "../reusable-components/AlertPopUp";
import { useState } from "react";

function Header() {
  const auth = getAuth(app);
  const [openAlertPopup, setOpenAlertPopup] = useState(false);

  return (
    <header className="bg-zinc-900 p-4 mt-[0px] w-full">
      <div className="flex items-center justify-between w-[97%]">
        <p className="text-white">Threads</p>
        <div className="flex items-center">
          <DropDownMenu setOpenAlertPopup={setOpenAlertPopup} />
        </div>
      </div>
      <AlertPopUp
        openAlertPopup={openAlertPopup}
        setOpenAlertPopup={setOpenAlertPopup}
      />
    </header>
  );
}

export default Header;
