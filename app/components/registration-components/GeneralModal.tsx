import React, { ReactNode } from "react";
import { CgClose } from "react-icons/cg";

const GeneralModal = ({
  status,
  title,
  children,
  footer,
  toggle,
}: {
  status: boolean;
  title: string;
  children: ReactNode;
  footer: ReactNode;
  toggle: () => void;
}) => {
  console.log("Status", status);
  return (
    <div
      className={`${
        status
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } h-screen w-screen bg-black transition-opacity duration-150 scale-100 ease-in bg-opacity-60 z-10 fixed inset-0 flex justify-center items-center  `}
    >
      <div className="bg-white flex flex-col gap-5 md:m-auto rounded-md z-50 w-full h-full md:h-3/4 md:w-1/2 p-5">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold text-slate-600 ">{title}</h1>
          <button className="text-xl font-bold" onClick={toggle}>
            <CgClose className="font-bold text-xl " />
          </button>
        </div>
        <div className="flex flex-col justify-between h-full">
          {children}
          <div>{footer}</div>
        </div>
      </div>
    </div>
  );
};

export default GeneralModal;
