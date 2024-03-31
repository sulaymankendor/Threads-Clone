import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import Home from "@/svg/Home";
import User from "@/svg/User";
import Heart from "@/svg/Heart";
import Users from "@/svg/Users";
import Search from "@/svg/Search";
import PlusCircle from "@/svg/PlusCircle";

const navLinks: { navigationName: string; svg: JSX.Element; path: string }[] = [
  { navigationName: "Home", svg: <Home />, path: "/" },
  { navigationName: "Search", svg: <Search />, path: "/search" },
  {
    navigationName: "Activity",
    svg: <Heart width="24px" svgColor="text-white" />,
    path: "/activity",
  },
  {
    navigationName: "Create Thread",
    svg: <PlusCircle />,
    path: "/create-a-post",
  },
  { navigationName: "Communities", svg: <Users />, path: "/communities" },
  {
    navigationName: "Profile",
    svg: <User />,
    path: "/profile/username/threads",
  },
];
function NavigationBar() {
  const pathName = usePathname();
  return (
    <section>
      <nav className="w-[210px] p-1 bg-zinc-900 h-[93vh]">
        {navLinks.map((navLinks) => {
          return (
            <Link
              key={navLinks.navigationName}
              href={navLinks.path}
              className={`${pathName} === ${
                navLinks.path
              } && "bg-violet-500"} ${
                pathName?.split("/")[1] === navLinks.path.split("/")[1] &&
                "bg-violet-500"
              }
              flex transition-all hover:bg-violet-500 p-2 items-center w-[170px] rounded my-7 ml-3`}
            >
              {navLinks.svg}
              <p className="text-white">{navLinks.navigationName}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

export default NavigationBar;
