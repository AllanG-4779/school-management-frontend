"use client";
import React from "react";
const NewSession = () => {
  return (
    <div className="flex-col gap-5 p-2">
      <div className=" flex flex-col gap-2 items-start">
        <div className="flex flex-col gap-2 w-full ">
          <label className="text-sm font-semibold" htmlFor="name">
            Session Name
          </label>
          <input
            type="text"
            className="border w-full p-2 rounded-md outline-none text-slate-500"
          />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <label className="text-sm font-semibold" htmlFor="name">
            Description
          </label>
          <input
            type="text"
            className="border w-full p-2 rounded-md outline-none text-slate-500"
          />
        </div>

        <div className="flex flex-col gap-2  w-full">
          <label className="text-sm font-semibold" htmlFor="name">
            Session Start
          </label>
          <input
            type="date"
            className="border p-2 w-full rounded-md outline-none text-slate-500"
          />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <label className="text-sm font-semibold" htmlFor="name">
            Session End
          </label>
          <input
            type="date"
            className="border w-full p-2 rounded-md outline-none text-slate-500"
          />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <label className="text-sm font-semibold" htmlFor="name">
            Status
          </label>
          <select className="border p-3 rounded-md text-slate-500">
            <option value="progress">In Progress</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NewSession;
