import {
  CurrentAuthUserInfoContext,
  RouterContext,
} from "@/components/provider/Providers";
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
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { useRouter } from "next/router";

function DropDownMenu({
  setOpenAlertPopup,
}: {
  setOpenAlertPopup: Dispatch<SetStateAction<boolean>>;
}) {
  const currentAuthUserInfo = useContext(CurrentAuthUserInfoContext);
  const router = useContext(RouterContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar
          src={currentAuthUserInfo?.currentAuthUserInfo.profilePicture}
          alt="user-profile"
          sx={{ width: 38, height: 38 }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            router?.push("/profile/username/threads");
          }}
        >
          Profile
        </DropdownMenuItem>
        {/* <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem> */}
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
  );
}

export default DropDownMenu;
