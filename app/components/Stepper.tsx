"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Stepper: React.FC<StepperType> = (props) => {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState(false);
  console.log(active);

  useEffect(() => {
    setCompleted(active === props.items.length);
  }, [active, props.items.length]);
  // the steps
  const steps = props.items.map((_, index) => {
    return (
      <div
        className={`w-10 h-10 z-20 transition-all ease-out duration-100  rounded-[50%] flex items-center justify-center text-white 
          ${active === index && !completed ? "bg-slate-600" : "bg-gray-400"} ${
          index < active ? "bg-purple-600" : "bg-gray-400"
        }   ${completed ? "bg-purple-600" : "bg-gray-400"}`}
        key={index}
        onClick={() => {
          setActive(index);
          console.log(index, active);
        }}
      >
        {active > index ? (
          <FaCheck className=" text-white font-bold" />
        ) : completed ? (
          <FaCheck className=" text-white font-bold " />
        ) : (
          index + 1
        )}
      </div>
    );
  });
  const length = `${(100 / (props.items.length - 1)) * active}%`;
  return (
    <div className=" w-full md:w-8/12 mx-auto flex flex-col gap-3">
      <h1 className="text-lg text-gray-700 font-bold mb-5 ">{props.title}</h1>
      <div className=" bg-white p-2 box-border rounded-md ">
        <div
          className={`flex z-20   relative justify-between w-full mx-auto rounded-md font-bold`}
        >
          {steps}
          <div
            className={`bg-gray-300 h-1  transition-all ease-in duration-150 absolute  rounded-full `}
            style={{ top: "50%", zIndex: 1, width: "100%" }}
          >
            <div
              className={`bg-purple-600 h-1 rounded-full transition-all duration-150 ease-in  `}
              style={{ width: length }}
            ></div>
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <div className="mt-2 transition-all ease-in duration-200 transform opacity-100 scale-100">
          {props.items[active]}
        </div>
      </div>
      <div className=" bg-white p-2 w-full border py-5 rounded-md flex justify-between items-center ">
        <button
          disabled={active === 0}
          className="bg-purple-600 disabled:bg-purple-300 text-white  px-4 py-2 rounded-md"
          onClick={() => {
            if (active > 0) {
              setActive(active - 1);
            }
          }}
        >
          Back
        </button>
        <button
          className={`bg-purple-600 disabled:bg-purple-300 text-white px-4 py-2 rounded-md  ${
            active < props.items.length - 1 ? "block" : "hidden"
          }`}
          onClick={() => {
            if (active < props.items.length - 1) {
              setActive(active + 1);
            }
          }}
        >
          Next
        </button>
        <button
          className={`bg-purple-600  ${
            active >= props.items.length - 1 ? "block" : "hidden"
          } disabled:bg-purple-300 text-white px-4 py-2 rounded-md`}
          onClick={() => {
            setCompleted(true);
          }}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

type StepperType = {
  items: ReactNode[];
  title: string;
};
export default Stepper;
