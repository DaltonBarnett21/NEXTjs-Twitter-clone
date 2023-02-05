import React from "react";
import Tabs from "../profile/[userId]/Tabs";

const tabsProps = {
  containerClass: "flex text-2xl",
  tabClass: "flex-1 cursor-pointer",
  tabs: [
    {
      tabsLabel: "Following",
      tabsContent: "",
      href: "/following",
    },
    {
      tabsLabel: "Followers",
      tabsContent: "",
      href: "/followers",
    },
  ],
  followsPage: true,
  followingPage: true,
};

const page = () => {
  return (
    <div>
      <Tabs {...tabsProps} />
    </div>
  );
};

export default page;
