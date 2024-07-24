import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

function ThreadSkeleton({ marginTop }: { marginTop?: string }) {
  return (
    <Stack
      spacing={1}
      sx={{
        width: "100%",
        backgroundColor: "#18181b",
        padding: "13px",
        borderRadius: "6px",
        marginBottom: "2.25rem",
        marginTop: `${marginTop ? marginTop : ""}`,
      }}
    >
      <div className="flex">
        <Skeleton
          variant="circular"
          width={55}
          height={50}
          sx={{ backgroundColor: "black" }}
        />
        <div className="flex flex-col w-full ml-4">
          <Skeleton
            variant="text"
            // width={210}
            height={50}
            sx={{ backgroundColor: "black", width: "15%" }}
          />
          <Skeleton
            variant="text"
            // width={210}
            height={100}
            sx={{ backgroundColor: "black", width: "92%", marginTop: "-15px" }}
          />
          <div className="flex justify-between">
            <Skeleton
              variant="text"
              // width={210}
              height={50}
              sx={{
                backgroundColor: "black",
                width: "22%",
                marginTop: "-10px",
              }}
            />
            <Skeleton
              variant="text"
              // width={210}
              height={50}
              sx={{
                backgroundColor: "black",
                width: "24%",
                marginTop: "0px",
              }}
            />
          </div>
        </div>
      </div>
    </Stack>
  );
}

export default ThreadSkeleton;
