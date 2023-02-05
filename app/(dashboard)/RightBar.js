import React from "react";

const RightBar = () => {
  return (
    <div className=" flex-[20%]  bg-[#14171A] self-start sticky right-0 top-24 ">
      <div className=" rounded-lg bg-gray-800 ml-4 mr-4 pb-4 text-white text-center flex  flex-col items-start p-4">
        <h2 className=" font-bold ">Trending for you</h2>
        <div className="mt-1">
          <p className=" text-gray-400 font-bold text-sm">
            Trending in Oklahoma
          </p>
        </div>
        <div className=" cursor-pointer">
          <p className=" mt-6 font-bold">#MINIONS</p>
          <span className=" text-gray-400 text-sm">87k Tweets</span>
        </div>
        <div className=" cursor-pointer">
          <p className=" mt-6 font-bold">#OSU</p>
          <span className=" text-gray-400 text-sm">105k Tweets</span>
        </div>
        <div className=" cursor-pointer">
          <p className=" mt-6 font-bold">#OU</p>
          <span className=" text-gray-400 text-sm">150k Tweets</span>
        </div>
        <div className=" cursor-pointer">
          <p className=" mt-6 font-bold">#SWEETTEA</p>
          <span className=" text-gray-400 text-sm">40k Tweets</span>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
