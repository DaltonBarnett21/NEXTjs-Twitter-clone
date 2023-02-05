"use client";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoopIcon from "@mui/icons-material/Loop";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import Comment from "./Comment";
import ToolTipUtil from "./ToolTipUtil";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Post = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [openComments, setOpenComments] = useState(false);
  const onOpenComments = () => setOpenComments(true);
  const onCloseComments = () => setOpenComments(false);

  return (
    <div className=" bg-gray-800 text-white rounded-lg mt-5 mb-5 p-6">
      <div className="  flex items-center justify-between">
        <div className="flex">
          <div className=" h-12 w-12 relative  rounded-full ">
            <Image
              src="/aboutImage.jpg"
              className=" object-cover rounded-full"
              fill
            />
          </div>
          <div className="flex flex-col ml-3">
            <div className="flex">
              <span>Dalton Barnett</span>
              <span className="flex ml-2 text-gray-400">@daltron</span>
            </div>

            <span className=" text-sm text-gray-400">5 min ago</span>
          </div>
        </div>

        <a id="more">
          <MoreHorizIcon className=" text-gray-400 cursor-pointer" />
        </a>
        <ToolTipUtil anchorId="more">
          <div className=" w-32 cursor-pointer">
            <DeleteOutlineOutlinedIcon className=" text-red-500" />
            <span>Delete Post</span>
          </div>
        </ToolTipUtil>
      </div>
      <div className=" max-w-[980px] mx-auto mt-1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero
          justo laoreet sit amet. Sed euismod nisi porta lorem. Neque viverra
          justo nec ultrices dui sapien. A condimentum vitae sapien pellentesque
          habitant. Bibendum neque egestas congue quisque egestas diam in arcu
          cursus.
        </p>
        <div className=" h-80 w-full relative  rounded-full mt-5 mb-5 ">
          <Image src="/post.jpg" className=" object-cover  rounded-lg" fill />
        </div>

        <div className="mt-4 flex justify-between">
          <div className=" flex">
            <div className=" bg-red-500 w-7 h-7 flex rounded-full items-center justify-center cursor-pointer">
              <FavoriteIcon fontSize="small" />
            </div>
            <span className=" text-gray-400 ml-2">500 Likes</span>
            <div className=" bg-green-500 w-7 h-7 flex rounded-full items-center justify-center cursor-pointer ml-2">
              <LoopIcon fontSize="small" />
            </div>
            <span className=" text-gray-400 ml-2">800 Retweets</span>
          </div>
          <span
            onClick={onOpenComments}
            className=" text-gray-400 cursor-pointer"
          >
            48 Comments
          </span>
          {openComments && (
            <Modal open={onOpenComments} onClose={onCloseComments} center>
              <div className=" h-[380px] w-[500px] p-2">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
            </Modal>
          )}
        </div>
        <div className=" flex  mt-5">
          <div className=" bg-gray-700 w-36 p-2 hover:bg-gray-600 cursor-pointer flex justify-center items-center rounded-lg mr-2">
            <FavoriteIcon fontSize="small" />
            <span className="flex items-center ml-1">Like</span>
          </div>
          <div className=" bg-gray-700 w-36 p-2 cursor-pointer hover:bg-gray-600 flex justify-center items-center rounded-lg mr-2">
            <LoopIcon fontSize="small" />
            <span className="flex items-center ml-1">Retweet</span>
          </div>
          <div
            onClick={onOpenModal}
            className=" bg-gray-700 w-36 p-2 cursor-pointer hover:bg-gray-600 flex justify-center items-center rounded-lg"
          >
            <MapsUgcIcon fontSize="small" />
            <span className="flex items-center ml-1">Comment</span>
          </div>
        </div>
      </div>
      {open && (
        <Modal open={open} onClose={onCloseModal} center>
          <div className=" h-[800px] w-[500px] p-4">
            <div className="  flex items-center justify-between">
              <div className="flex">
                <div className=" h-12 w-12 relative  rounded-full ">
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

                  <span className=" text-sm text-gray-400">5 min ago</span>
                </div>
              </div>
            </div>
            <p className="ml-2 mt-2 mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
              libero justo laoreet sit amet. Sed euismod nisi porta lorem. Neque
              viverra justo nec ultrices dui sapien. A condimentum vitae sapien
              pellentesque habitant. Bibendum neque egestas congue quisque
              egestas diam in arcu cursus.
            </p>
            <div className=" h-80 w-full relative  rounded-full mt-5 mb-5 ">
              <Image
                src="/post.jpg"
                className=" object-cover  rounded-lg"
                fill
              />
            </div>
            <span className=" text-gray-600 ml-2 mt-2 flex">
              Replying to{" "}
              <p className="text-[#1DA1F2] ml-1 font-bold cursor-pointer">
                @daltron
              </p>
            </span>
            <div className="mt-5 flex items-center">
              <div className=" h-12 w-12 relative  rounded-full ">
                <Image
                  src="/aboutImage.jpg"
                  className=" object-cover rounded-full"
                  fill
                />
              </div>
              <input
                placeholder="Tweet your reply"
                className=" mt-2 ml-2 outline-none border border-gray-400 p-3 w-full"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button className=" font-bold bg-[#1DA1F2] text-white w-20 p-2 rounded-lg">
                Reply
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Post;
