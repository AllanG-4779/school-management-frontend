import React, { ReactNode } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";

const AnalyticsCard: React.FC<BadgeProps> = ({
  current,
  previous,
  analytic,
  parentIcon,
}) => {
  return (
    <div
      className={`bg-white rounded-md p-3 min-h-[8rem] flex items-center gap-2 flex-col min-w-[13rem] shadow-sm flex-1`}
    >
      <div
        className={`${
          current > previous ? "bg-green-100" : "bg-red-100"
        } rounded-full p-3 flex items-center justify-center`}
      >
        <div
          className={`${
            current > previous ? "text-green-400" : "text-red-700"
          }`}
        >
          {parentIcon}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-2xl text-gray-700">
          {formatDisplay(current)}
        </p>
        <p className="text-gray-400 text-sm font-light">{analytic}</p>
      </div>
      <ComparisonBadge previous={previous} current={current} />
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
      className={`flex  gap-2 items-center justify-center p-1 rounded-xl min-w-[7rem] ${
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
  parentIcon: ReactNode;
};

export default AnalyticsCard;

const formatDisplay = (value: number) => {
  if (value > 1000) {
    return `${(value / 1000).toPrecision(4)}K`;
  }
  return value;
};
