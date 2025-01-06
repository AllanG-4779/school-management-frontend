import React from "react";
import { ClassEnrollment, SessionProps } from "./AddSession";

const SessionComponent: React.FC<SessionProps> = (props) => {
  const currentItem = props.props[0];
  const start = new Date(currentItem.start).toUTCString();
  const end = new Date(currentItem.end).toUTCString();
  console.log(start, end);
  return (
    <div className="">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <span className="font-light">Session:</span>
          <p className=" font-bold text-gray-700 text-lg">{currentItem.name}</p>
        </div>
        <button className="bg-red-500 text-white font-medium w-[7rem] p-2 rounded-md">
          End Session
        </button>
      </div>
      <div className="flex mb-2 mt-5 border p-3 md:p-5 flex-col gap-3 md:gap-10 bg-white rounded-md items-start md:flex-row">
        <div>
          <p className="font-bold text-sm">Description</p>
          <p className="text-xs">{currentItem.description}</p>
        </div>
        <div>
          <p className="font-bold text-sm">Starting on</p>
          <p className="text-xs">{start}</p>
        </div>
        <div>
          <p className="font-bold text-sm">Ending on</p>
          <p className="text-xs">{end}</p>
        </div>
        <div>
          <p className="font-bold text-sm">Status</p>
          <p className="text-xs bg-green-100 font-bold text-green-600 px-2 rounded">
            Ongoing
          </p>
        </div>
      </div>
      <div className="bg-white p-2 rounded-sm border ">
        <div className=" flex justify-between">
          <p className="text-gray-600 font-bold  text-md mb-4">Enrollments</p>
          <button className="bg-[#771BCC] text-white p-1 rounded-md">
            Add Enrollment
          </button>
        </div>

        <div className="flex gap-5 flex-col">
          <Enrollment
            data={[
              { name: "Form One", number: 400 },
              { name: "Form Two", number: 400 },
              { name: "Form Three", number: 400 },
              { name: "Form Four", number: 400 },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const Enrollment: React.FC<{ data: ClassEnrollment }> = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="text-bold text-md" key={item.name}>
            <div className="text-sm">
              <p>{item.name}</p>
              <p className="text-gray-800 text-sm[9">{item.number}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SessionComponent;
