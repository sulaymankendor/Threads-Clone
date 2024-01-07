import { GitHub } from "@mui/icons-material";

import GoogleLogoSVG from "@/svg/GoogleLogoSVG";
import GithubAndGoogleButton from "./GithubAndGoogleButton";

function ContinueWithGithubAndGoogleButton() {
  return (
    <>
      <GithubAndGoogleButton>
        <GitHub sx={{ width: "24px" }} />
      </GithubAndGoogleButton>
      <GithubAndGoogleButton>
        <GoogleLogoSVG />
      </GithubAndGoogleButton>
    </>
  );
}

export default ContinueWithGithubAndGoogleButton;
