"use client";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";
import Post from "./Post";
import ToolTipUtil from "./ToolTipUtil";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useSession } from "next-auth/react";

const Navbar = () => {
  // const { data: session } = useSession();

  return (
    <div className=" bg-[#14171A] text-white pt-4 pb-4 sticky top-0 z-50">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/twitter_logo.png" height={60} width={60} />
          </Link>

          <div>
            <input
              placeholder="#Explore"
              className=" bg-gray-700 outline-none p-2 rounded-lg ml-2 w-80"
            />
          </div>
        </div>
        <div className="flex items-center">
          <Link href="/">
            <span className="flex items-center cursor-pointer justify-center bg-white rounded-2xl text-black p-1 w-24">
              <HomeIcon className=" text-[#1DA1F2]" />
              <p className=" font-bold">Home</p>
            </span>
          </Link>

          <div className=" relative cursor-pointer">
            <EmailIcon className=" text-[#F5F8FA] ml-5" />
            <div className="h-5 w-5 flex justify-center items-center absolute bg-[#1DA1F2] rounded-full -right-3 top-0">
              5
            </div>
          </div>

          <div className=" relative cursor-pointer">
            <NotificationsIcon className=" text-[#F5F8FA] ml-5" />
            <div className="h-5 w-5 flex justify-center items-center absolute bg-[#1DA1F2] rounded-full -right-3 top-0">
              5
            </div>
          </div>
          <div className="flex items-center bg-gray-800 w-44 p-2 rounded-xl ml-5 cursor-pointer">
            <div className="">
              <Image
                src="/aboutImage.jpg"
                width={30}
                height={30}
                className=" rounded-full mr-2"
              />
            </div>
            <span className=" text-sm mr-1">Dalton Barnett</span>
            <a id="options">
              {" "}
              <ArrowDropDownIcon />
            </a>
            <ToolTipUtil anchorId="options">
              <div className="flex cursor-pointer">
                <LogoutOutlinedIcon />
                <span>Logout</span>
              </div>
            </ToolTipUtil>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
