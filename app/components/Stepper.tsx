import React, { ReactNode } from "react";

const Stepper: React.FC<StepperType> = (props) => {
  const steps = props.items.map((_, index) => {
    return (
      <div
        className="bg-slate-500 w-10 h-10 rounded-[50%] flex items-center justify-center text-white"
        key={index}
      >
        {index + 1}
      </div>
    );
  });

  return (
    <div className=" bg-white relative">
      <div
        className={`flex  justify-between w-full mx-auto rounded-md font-bold`}
      >
        {steps}
      </div>
      <div
        className={`bg-gray-400 h-1  absolute w-[100%]`}
        style={{ top: "50%", zIndex: -1 }}
      ></div>
    </div>
  );
};

type StepperType = {
  items: ReactNode[];
  title: string;
};
export default Stepper;
