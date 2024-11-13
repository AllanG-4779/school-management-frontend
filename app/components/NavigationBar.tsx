"use client";
import Image from "next/image";
import React from "react";
import { BiMenu, BiMessageDots } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const NavigationBar = ({
  toggle,
  current,
}: {
  toggle: () => void;
  current: boolean;
}) => {
  return (
    <nav className="flex p-3 items-center ">
      <div className="hidden md:flex  flex-1 bg-[#eaeeff] rounded-md ">
        <input
          type="text"
          placeholder="Find something..."
          className="p-2 px-1 rounded-md outline-none w-full  bg-[#eaeeff] "
        />
        <button className=" rounded-br-md rounded-tr-md text-white px-3 ">
          <IoSearch className="text-[#771BCC] font-bold" />
        </button>
      </div>
      <div
        className=" md:hidden p-3 cursor-pointer hover:bg-slate-100"
        onClick={toggle}
      >
        {current ? <GrClose className="flex md:hidden text-2xl" /> : <BiMenu />}
      </div>
      <div className="flex flex-1 justify-end gap-4 items-center h-full">
        <IoIosNotificationsOutline className="text-2xl text-[#79797a]" />
        <BiMessageDots className="text-2xl text-[#79797a]" />
        {/* Profile */}
        <div className="flex gap-3 ]">
          <Image
            src={"/profile.jpeg"}
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="font-bold text-sm">AllanG</p>
            <p className="font-light text-xs">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
