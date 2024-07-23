import AlertPopUp from "@/components/reusable-components/AlertPopUp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@mui/material";
import { CurrentAuthUserProfilePicContext } from "@/components/provider/Providers";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";

function DropDownMenu({
  setOpenAlertPopup,
}: {
  setOpenAlertPopup: Dispatch<SetStateAction<boolean>>;
}) {
  const currentAuthUserProfilePic = useContext(
    CurrentAuthUserProfilePicContext
  );

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar
            src={currentAuthUserProfilePic?.currentAuthUserProfilePic}
            alt="user-profile"
            sx={{ width: 38, height: 38 }}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              setOpenAlertPopup(true);
            }}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default DropDownMenu;
