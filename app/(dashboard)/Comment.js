"use client";
import Image from "next/image";

const Comment = () => {
  return (
    <>
      <div className="  flex items-center justify-between text-xs mt-5">
        <div className="flex">
          <div className=" h-8 w-8 relative  rounded-full ">
            <Image
              src="/aboutImage.jpg"
              className=" object-cover rounded-full"
              fill
            />
          </div>
          <div className="flex flex-col ml-3">
            <div className="flex">
              <span>Dalton Barnett</span>
              <span className="flex ml-2 text-gray-500">@daltron</span>
            </div>

            <span className=" text-xs text-gray-400">5 min ago</span>
          </div>
        </div>
      </div>
      <p className=" mt-2 mb-1 text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nam libero justo
        laoreet sit amet. Sed euismod nisi porta lorem. Neque viverra justo nec
        ultrices dui sapien. A condimentum vitae sapien pellentesque habitant.
        Bibendum neque egestas congue quisque egestas diam in arcu cursus.
      </p>
    </>
  );
};

export default Comment;
