import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleButtonGroup() {
  return (
    <ToggleGroup type="single" className="w-full">
      <ToggleGroupItem
        value="bold"
        aria-label="Toggle bold"
        className="flex-1 text-white"
      >
        <CommentOutlinedIcon className="text-gray-500 w-5" />
        <p className="text-gray-300 capitalize ml-3">Threads</p>
        <p
          className="bg-zinc-600 px-1 ml-3 text-sm rounded-sm text-gray-400"
          style={{ height: "19px" }}
        >
          1
        </p>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="italic"
        aria-label="Toggle italic"
        className="flex-1 text-white"
      >
        <PeopleOutlineIcon className="text-gray-500 w-5" />
        <p className="text-gray-300 capitalize ml-2">Replies</p>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="underline"
        aria-label="Toggle underline"
        className="flex-1 text-white"
      >
        <LocalOfferOutlinedIcon className="text-gray-500 w-5" />
        <p className="text-gray-300 capitalize ml-2">Tagged</p>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
