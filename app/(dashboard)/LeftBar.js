import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserCard from "./UserCard";

const LeftBar = () => {
  return (
    <div className=" flex-[20%] bg-[#14171A] sticky left-0 top-24 self-start">
      <div className=" rounded-lg bg-gray-800 ml-4 mr-4 pb-4 text-white text-center">
        <div className=" h-28 w-full relative ">
          <Image src="/post.jpg" className=" object-cover" fill />
        </div>
        <div className=" flex justify-center">
          <div className=" h-32 w-32 relative bottom-5 border-2 border-white rounded-full ">
            <Image
              src="/aboutImage.jpg"
              className=" object-cover rounded-full"
              fill
            />
          </div>
        </div>
        <h2 className=" text-2xl mt-2">Dalton Barnett</h2>
        <span className=" text-gray-400">@daltron</span>
        <p className="">Hello, I'm Dalton</p>
        <div className="flex mt-5 p-4">
          <div className="flex-1 flex flex-col">
            <span className=" font-bold">6,664</span>
            <span className=" text-gray-400">Following</span>
          </div>
          <div className="flex-1 flex flex-col">
            <span className=" font-bold">5,648</span>
            <span className=" text-gray-400">Followers</span>
          </div>
        </div>
        <Link href="/profile/123">
          <p className=" text-[#1DA1F2] cursor-pointer">My Profile</p>
        </Link>
      </div>

      <div className=" rounded-lg bg-gray-800 ml-4 mr-4 p-4 text-white text-center mt-5">
        <h3 className=" font-bold">Who to Follow</h3>
        <UserCard />
        <UserCard />
        <UserCard />
        <Link href="/recommended">
          <p className=" text-[#1DA1F2] cursor-pointer flex justify-start mt-4">
            Show More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LeftBar;
