"use client";
import LoadingButton from "@mui/lab/LoadingButton";

function Button() {
  return (
    <LoadingButton
      // loading={true}
      sx={{
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "capitalize",
        color: "white",
        width: "90%",
        marginTop: "32px",
      }}
      style={{ backgroundColor: "#7c3aed" }}
    >
      Post Thread
    </LoadingButton>
  );
}

export default Button;
