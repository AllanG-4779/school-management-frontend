"use client";
import React, { ReactNode, useState } from "react";

const Stepper: React.FC<StepperType> = (props) => {
  const [active, setActive] = useState(0);
  const steps = props.items.map((_, index) => {
    return (
      <div
        className="bg-gray-400 w-10 h-10 z-20 rounded-[50%] flex items-center justify-center text-white"
        key={index}
        onClick={() => setActive(index)}
      >
        {index + 1}
      </div>
    );
  });
  const length = `${(100 / (props.items.length - 1)) * active}%`;
  return (
    <div className=" bg-white relative p-2">
      <div
        className={`bg-gray-400 h-1 transition-all ease-in-out duration-150 absolute  rounded-full ${length}`}
        style={{ top: "50%", zIndex: 1, width: length }}
      ></div>
      <div
        className={`flex z-20  justify-between w-full mx-auto rounded-md font-bold`}
      >
        {steps}
      </div>
    </div>
  );
};

type StepperType = {
  items: ReactNode[];
  title: string;
};
export default Stepper;
