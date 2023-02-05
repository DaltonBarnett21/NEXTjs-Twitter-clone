"use client";
import Image from "next/image";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import ReplayIcon from "@mui/icons-material/Replay";

const SharePost = () => {
  const [file, setFile] = useState();

  return (
    <>
      <div className="flex justify-end">
        <ReplayIcon fontSize="medium" className=" text-white cursor-pointer" />
      </div>
      <div className="flex flex-col bg-gray-800 p-6 mt-1 rounded-lg">
        <div className=" rounded-lg  flex items-center">
          <div className=" h-12 w-12 relative  rounded-full ">
            <Image
              src="/aboutImage.jpg"
              className=" object-cover rounded-full"
              fill
            />
          </div>
          <div className="ml-4 w-full">
            <input
              placeholder="What's happening? "
              className=" bg-gray-700 outline-none rounded-lg p-2 w-full text-white"
            />
          </div>
        </div>
        <div className="flex ml-16 mt-3">
          <div className="flex justify-between w-full">
            <div className="flex ">
              <input
                type="file"
                id="file"
                className=" hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <div className="flex items-center w-20 rounded-md p-1 cursor-pointer">
                <label htmlFor="file">
                  <InsertPhotoIcon className=" text-green-600 mr-1" />
                  <span className=" text-white">Photo</span>
                </label>
              </div>
              <div className=" ml-5">
                <div className="flex items-center w-20 rounded-md p-1 cursor-pointer">
                  <PlayCircleIcon className=" text-blue-600 mr-1" />
                  <span className=" text-white">Video</span>
                </div>
              </div>
            </div>
            <button className="bg-[#1DA1F2] w-24 rounded-lg font-bold text-white">
              Tweet
            </button>
          </div>
        </div>
        {file && (
          <div className=" relative">
            <div className=" h-96 w-full relative mt-5 ">
              <Image
                src={URL.createObjectURL(file)}
                fill
                className=" object-cover rounded-xl p-2"
              />
            </div>
            <CancelIcon
              fontSize="large"
              className=" absolute top-8 right-3 cursor-pointer text-white"
              onClick={() => setFile("")}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SharePost;
