import React from "react";
import { SessionProps } from "./AddSession";

const SessionComponent: React.FC<SessionProps> = (props) => {
  return (
    <div className="flex gap-2 items-center">
      <p className=" font-bold text-gray-700 text-lg">{props.props[0].name}</p>
    </div>
  );
};

export default SessionComponent;
