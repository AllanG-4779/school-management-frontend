import React, { ReactNode } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";

const AnalyticsCard: React.FC<BadgeProps> = ({
  current,
  analytic,
  parentIcon,
  bg,
  fore,
}) => {
  return (
    <div
      className={`${bg} rounded-md p-3 min-h-[7rem]  relative flex items-center  gap-2 shadow-sm flex-1`}
    >
      <div className="flex w-full  h-full items-center justify-between flex-row-reverse">
        <div
          className={` ${bg} rounded-full p-3 flex items-center justify-center`}
        >
          <div className={` text-3xl ${fore} flex items-center justify-center`}>
            {parentIcon}
          </div>
        </div>
        <div className="flex flex-col-reverse gap-3">
          <p className="font-bold text-2xl text-gray-700">
            {formatDisplay(current)}
          </p>
          <p className="text-gray-400 text-sm font-light">{analytic}</p>
        </div>
      </div>
      {/* <ComparisonBadge previous={previous} current={current} /> */}
    </div>
  );
};

export const ComparisonBadge = ({
  current,
  previous,
}: {
  current: number;
  previous: number;
}) => {
  return (
    <div
      className={`flex absolute right-2 top-3 gap-2 items-center justify-center text-xs p-[4px] rounded-xl min-w-[1rem] ${
        previous > current
          ? " text-red-700  bg-red-100"
          : "text-green-600 bg-green-100"
      } `}
    >
      {current > previous ? <FaAngleUp /> : <FaAngleDown />}
      <p>{Math.abs(((current - previous) / previous) * 100).toPrecision(4)}%</p>
    </div>
  );
};

type BadgeProps = {
  current: number;
  previous: number;
  analytic: string;
  bg: string;
  fore: string;
  parentIcon: ReactNode;
};

export default AnalyticsCard;

const formatDisplay = (value: number) => {
  if (value > 1000) {
    return `${(value / 1000).toPrecision(4)}K`;
  }
  return value;
};
