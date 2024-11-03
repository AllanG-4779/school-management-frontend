import React from 'react'

const AcademicInformation = () => {
  return (
    <div>
      {" "}
      <div className="p-2 bg-white rounded-md border flex flex-col gap-2 shadow-sm w-10/12 mx-auto">
        <p className="text-slate-500 font-bold">
          Parent / Guardian Information
        </p>
        <div className="flex flex-col gap-2 text-sm text-slate-600">
          <label htmlFor="fname">Full Names</label>
          <input type="text" className=" p-2 border outline-none rounded-md" />
        </div>
        <div className="flex flex-col gap-2  text-sm text-slate-600">
          <label htmlFor="fname">Phone Number </label>
          <input type="text" className=" p-2 border outline-none rounded-md" />
        </div>
        <div className="flex flex-col gap-2  text-sm text-slate-600">
          <label htmlFor="fname">Email</label>
          <input type="text" className=" p-2 border outline-none rounded-md" />
        </div>
        <div className="flex flex-col gap-2  text-sm text-slate-600">
          <label htmlFor="fname">Emergency Contact</label>
          <input type="text" className=" p-2 border outline-none rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default AcademicInformation