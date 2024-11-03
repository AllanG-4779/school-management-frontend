import React from "react";

const GuardianInformation = () => {
  return (
    <div className="p-2 bg-white rounded-md border flex flex-col gap-2 shadow-sm w-10/12 mx-auto">
      <p className="text-slate-500 font-bold">Academic Information</p>
      <div className="flex flex-col gap-2 text-sm text-slate-600">
        <label htmlFor="fname">Class of Admission</label>
        <input type="text" className=" p-2 border outline-none rounded-md" />
      </div>
      <div className="flex flex-col gap-2  text-sm text-slate-600">
        <label htmlFor="fname">Year of Admission</label>
        <input type="text" className=" p-2 border outline-none rounded-md" />
      </div>
      <div className="flex flex-col gap-2  text-sm text-slate-600">
        <label htmlFor="fname">Registration Number</label>
        <input type="text" className=" p-2 border outline-none rounded-md" />
      </div>
    </div>
  );
};

export default GuardianInformation;
