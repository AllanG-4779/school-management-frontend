"use client";
import React, { ReactNode, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";

const Layout = ({ children }: { children: ReactNode }) => {
  const [menuStatus, togglestatus] = useState(false);

  const updateState = () => {
    return togglestatus(!menuStatus);
  };
  return (
    <div className="flex flex-col">
      <div className="flex">
        <SideBar visible={menuStatus} />
        <div className="flex flex-col w-full">
          <NavigationBar current={menuStatus} toggle={updateState} />
          <div
            className="p-5 bg-slate-100 min-h-full"
            onClick={() => togglestatus(false)}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
