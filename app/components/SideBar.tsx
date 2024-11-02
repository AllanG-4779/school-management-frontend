"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { BiHelpCircle, BiLibrary, BiMoney } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FaTree } from "react-icons/fa";

import { GiPresent, GiTeacher } from "react-icons/gi";
import { GrDashboard } from "react-icons/gr";
import { HiDocumentReport } from "react-icons/hi";
import { PiExamThin, PiStudent } from "react-icons/pi";

const SideBar = ({ visible }: { visible: boolean }) => {
  const [activeIndex, setActiveIndex] = React.useState(-1);

  return (
    <div
      className={`${
        visible ? "absolute top-[20px]" : "hidden"
      }  flex-col bg-white h-[100vh] min-w-[13rem]  p-3 gap-3 md:flex  `}
    >
      {!visible ? <SchoolLogo /> : ""}
      <div className=" flex flex-col gap-5 p-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              return setActiveIndex(index);
            }}
            className="flex"
          >
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              to={item.to}
              active={activeIndex == index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const SchoolLogo = () => {
  return (
    <div className="flex gap-1 items-center">
      <FaTree className="text-3xl text-[#7C46F6]" />
      <p className="text-xl font-extrabold text-[#7C46F6] ">StMics</p>
    </div>
  );
};

const NavItem = ({
  icon,
  label,
  to,
  active,
}: {
  icon: ReactNode;
  label: string;
  active?: boolean;
  to: string;
}) => {
  return (
    <div
      className={`flex gap-2 items-center text-sm  p-1 ${
        active
          ? "bg-[#7b46f627] w-full rounded-md text-[#7b46f6d8]"
          : "text-gray-400"
      } `}
    >
      <p className={` ${active ? "text-[#7b46f6d8]" : "text-gray-400"}`}>
        {" "}
        {icon}
      </p>
      <Link href={to}>{label}</Link>
    </div>
  );
};

const menuItems = [
  {
    icon: <GrDashboard />,
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    icon: <PiStudent />,
    label: "Students",
    to: "/dashboard/students",
  },
  {
    icon: <GiTeacher />,
    label: "Teachers",
    to: "/teachers",
  },

  {
    icon: <CiSettings />,
    label: "Settings",
    to: "/settings",
  },
  {
    icon: <GiPresent />,
    label: "Attendance",
    to: "/attendance",
  },

  {
    icon: <PiExamThin />,
    label: "Exam",
    to: "/exam",
  },
  {
    icon: <BiLibrary />,
    label: "Library",
    to: "/library",
  },
  {
    icon: <BiMoney />,
    label: "Finance",
    to: "/finance",
  },
  {
    icon: <HiDocumentReport />,
    label: "Reports",
    to: "/reports",
  },
  {
    icon: <BiHelpCircle />,
    label: "Help",
    to: "/help",
  },
];

export default SideBar;
