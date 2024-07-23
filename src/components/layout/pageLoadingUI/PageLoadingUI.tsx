import ThreadsLogo from "@/svg/ThreadsLogo";
import { LinearProgress } from "@mui/material";
import React from "react";

function PageLoadingUI() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black z-10">
      <div className="absolute top-[35vh] left-[47vw] translate-x-(-50vw) translate-y-(-50vh)">
        <ThreadsLogo />
        <LinearProgress sx={{ borderRadius: "9999px" }} />
      </div>
    </div>
  );
}

export default PageLoadingUI;
