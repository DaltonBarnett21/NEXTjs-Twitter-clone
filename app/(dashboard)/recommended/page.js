"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import UserCard from "../UserCard";

const Recommended = () => {
  const router = useRouter();
  return (
    <div className=" h-full pl-2 pr-2 pb-5">
      <span className="flex">
        <div onClick={() => router.back()}>
          <ArrowBackIcon
            className=" text-[#1DA1F2] cursor-pointer"
            fontSize="large"
          />
        </div>

        <h2 className=" text-2xl text-white font-bold ml-5">Connect</h2>
      </span>
      <hr className=" border-b border-gray-200 mt-2" />
      <h1 className="text-3xl text-white font-bold ml-5 mt-2">
        Suggested for you
      </h1>
      <hr className=" border-b border-gray-200 mt-2 mb-2" />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default Recommended;
