import React from "react";
import Image from "next/image";

const UserCard = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="flex items-center">
        <div className=" h-12 w-12 relative  rounded-full ">
          <Image
            src="/aboutImage.jpg"
            className=" object-cover rounded-full"
            fill
          />
        </div>
        <div className="flex flex-col text-sm ml-2">
          <span className=" font-bold text-white">John Doe</span>
          <span className=" text-gray-400">@johnDoe</span>
        </div>
      </div>

      <button className=" bg-white w-20 p-1 rounded-lg font-bold text-black">
        Follow
      </button>
    </div>
  );
};

export default UserCard;
