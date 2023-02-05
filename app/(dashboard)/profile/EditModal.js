"use client";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Image from "next/image";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const EditModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className=" flex justify-end mt-6">
      <button
        onClick={onOpenModal}
        className=" bg-white text-black font-bold p-2 rounded-lg"
      >
        Edit Profile
      </button>
      {open && (
        <Modal open={open} onClose={onCloseModal} center>
          <div className="h-[575px] w-[500px]">
            <div className=" flex justify-between mt-8">
              <span className=" font-bold">Edit Profile</span>
              <button className=" bg-[#1DA1F2] p-1 w-20 text-white font-bold rounded-md">
                Save
              </button>
            </div>
            <div className=" h-60 w-full relative">
              <Image src="/post.jpg" fill className=" rounded-lg mt-5" />
              <CameraAltOutlinedIcon
                fontSize="large"
                className=" absolute top-28 left-60 text-white cursor-pointer"
              />
            </div>
            <div className=" h-28 w-28 relative bottom-10 left-5">
              <Image
                src="/aboutImage.jpg"
                fill
                className=" rounded-full border border-white"
              />
              <CameraAltOutlinedIcon className=" absolute bottom-0  text-white left-11 cursor-pointer" />
            </div>
            <input
              placeholder="Name"
              className=" p-2 border border-gray-400 outline-none w-full "
            />
            <input
              placeholder="UserName"
              className=" p-2 border border-gray-400 outline-none w-full mt-5 "
            />
            <textarea
              className="p-2 border border-gray-400 outline-none w-full mt-5"
              placeholder="Bio"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EditModal;
