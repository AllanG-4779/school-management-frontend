import React from "react";
import { Notice as NoticeType } from "../utils/types";

const Notice: React.FC<NoticeType> = (props) => {
  return (
    <div className="flex flex-col p-2 gap-3 border-b-2 border-gray-00 ">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-3">
          <div
            className={`text-4xl ${props.bgColor} ${props.text}  rounded-md p-2`}
          >
            {props.icon}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-md text-gray-700 font-bold">{props.title}</p>
            <p className="text-sm text-gray-400 font-light">
              {props.description}
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm">{formatWhen(props.time)}</p>
      </div>
    </div>
  );
};

const formatWhen = (date: string) => {
  const occurrence = new Date(date);
  const difference = new Date().getTime() - occurrence.getTime();
  if (difference < 60000) {
    return "Just now";
  }
  if (difference < 3600000) {
    return `${Math.floor(difference / 60000)}m ago`;
  }
  if (difference < 86400000) {
    return `${Math.floor(difference / 3600000)}h ago`;
  }
  if (difference < 604800000) {
    return `${Math.floor(difference / 86400000)}d ago`;
  }
  return occurrence.toDateString().replace(/^\S+\s/, "");
  return;
};

export default Notice;
