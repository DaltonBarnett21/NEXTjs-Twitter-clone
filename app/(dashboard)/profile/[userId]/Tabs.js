"use client";
import { useState } from "react";
import Link from "next/link";
import UserCard from "../../UserCard";

const Tabs = ({
  containerClass,
  tabClass,
  tabs,
  followsPage = false,
  followingPage,
  followerPage,
}) => {
  const [tab, setTab] = useState(followingPage ? 0 : followerPage ? 1 : 0);

  return (
    <>
      <div className={containerClass}>
        {tabs.map((t, i) =>
          followsPage ? (
            <div className="flex-1">
              <Link href={t.href}>
                <div onClick={() => setTab(i)} className={tabClass}>
                  <span
                    className={`font-bold ${
                      tab === i ? "text-white" : " text-gray-500"
                    } `}
                  >
                    {t.tabsLabel}
                  </span>
                  <div
                    className={`${
                      tab === i ? "border-b-[#1DA1F2]  border-b-4 w-full " : ""
                    } `}
                  />
                </div>
              </Link>
            </div>
          ) : (
            <div onClick={() => setTab(i)} className={tabClass}>
              <span
                className={`font-bold ${
                  tab === i ? "text-white" : " text-gray-500"
                } `}
              >
                {t.tabsLabel}
              </span>
              <div
                className={`${
                  tab === i ? "border-b-[#1DA1F2]  border-b-4 w-full " : ""
                } `}
              />
            </div>
          )
        )}
      </div>
      {followsPage ? (
        <div className=" h-screen">
          {tab === 0 && (
            <div>
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          )}
          {tab === 1 && (
            <div>
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          )}
        </div>
      ) : (
        <div className=" h-screen">
          {tab === 0 && <h1 className=" text-white">tweets</h1>}
          {tab === 1 && <h1 className=" text-white">media</h1>}
          {tab === 2 && <h1 className=" text-white">likes</h1>}
        </div>
      )}
    </>
  );
};

export default Tabs;
