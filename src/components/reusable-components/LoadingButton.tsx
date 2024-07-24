"use client";
import LoadingButton from "@mui/lab/LoadingButton";

function Button({
  createThread,
  iscreatingThread,
  disabled,
}: {
  createThread: () => void;
  iscreatingThread: boolean;
  disabled: boolean;
}) {
  return (
    <LoadingButton
      disabled={disabled}
      onClick={createThread}
      loading={iscreatingThread}
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
