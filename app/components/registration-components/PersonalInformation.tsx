import React from "react";

const PersonalInformation = () => {
  return (
    <div className="p-2 bg-white rounded-md border flex flex-col gap-2 shadow-sm w-10/12 mx-auto">
      <p className="text-slate-500 font-bold">Personal Information</p>
      <div className="flex flex-col gap-2 text-sm text-slate-600">
        <label htmlFor="fname">First Name</label>
        <input type="text" className=" p-2 border outline-none rounded-md" />
      </div>
      <div className="flex flex-col gap-2  text-sm text-slate-600">
        <label htmlFor="fname">Last Name</label>
        <input type="text" className=" p-2 border outline-none rounded-md" />
      </div>
      <div className="flex flex-col gap-2  text-sm text-slate-600">
        <label htmlFor="fname">Surname</label>
        <input type="text" className=" p-2 border outline-none rounded-md" />
      </div>
      <div className="flex flex-col gap-2  text-sm text-slate-600">
        <label htmlFor="fname">Date of Birth</label>
        <input type="date" className=" p-2 border outline-none rounded-md" />
      </div>
    </div>
  );
};

export default PersonalInformation;
