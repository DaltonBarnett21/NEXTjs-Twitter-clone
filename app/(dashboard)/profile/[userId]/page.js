import Image from "next/image";
import Post from "../../Post";
import EditModal from "../EditModal";
import Tabs from "./Tabs";
import Link from "next/link";

const tabsProps = {
  containerClass: "grid grid-cols-10  mt-2",
  tabClass: " cursor-pointer",
  tabs: [
    {
      tabsLabel: "Tweets",
      tabsContent: "",
    },
    {
      tabsLabel: "Media",
      tabsContent: "",
    },
    {
      tabsLabel: "Likes",
      tabsContent: "",
    },
  ],
};

const page = () => {
  return (
    <div className=" h-full relative">
      <div className=" h-96 w-full relative mt-1">
        <Image src="/post.jpg" fill className=" rounded-lg object-cover" />
      </div>
      <div className=" h-48 w-48 absolute  border-2 border-black rounded-full top-64  ">
        <Image
          src="/aboutImage.jpg"
          fill
          className=" rounded-full object-cover"
        />
      </div>
      <EditModal />
      <p className=" text-white mt-5 mb-2">Hello, I'm Dalton</p>
      <div className=" flex">
        <span className=" text-white flex ">
          <b>6,664</b>{" "}
          <Link href="/following">
            <p className="ml-2 hover:underline">Following</p>{" "}
          </Link>
        </span>
        <span className=" text-white flex ml-4">
          <b>6,664</b>{" "}
          <Link href="/followers">
            <p className="ml-2 hover:underline ">Followers</p>{" "}
          </Link>
        </span>
      </div>
      <hr className="mt-5" />
      <Tabs {...tabsProps} />
      {/* <Post />
      <Post />
      <Post /> */}
    </div>
  );
};

export default page;
