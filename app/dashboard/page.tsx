import React from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import { PiStudent } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa6";
import PerformanceComponet from "../components/PerformanceComponet";
import Donut from "../components/Donut";
import StudentList from "../components/StudentList";
import Notice from "../components/Notice";
import { TbPictureInPictureTop } from "react-icons/tb";

const DashboardPage = () => {
  return (
    <div className="flex h-full gap-3 flex-col">
      <div className=" bg-white p-3 rounded-md flex flex-col gap-3">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div className="flex w-full gap-3 flex-wrap">
          <AnalyticsCard
            current={120500}
            fore="text-purple-600"
            bg="bg-purple-50"
            previous={100000}
            analytic="Total Students"
            parentIcon={<PiStudent />}
          />
          <AnalyticsCard
            current={450}
            fore="text-blue-600"
            bg="bg-blue-50"
            previous={550}
            analytic="Teachers"
            parentIcon={<FaChalkboardTeacher />}
          />
          <AnalyticsCard
            current={45}
            previous={42}
            fore="text-yellow-600"
            bg="bg-yellow-50"
            analytic="Non Teaching"
            parentIcon={<FaIndustry />}
          />
          <AnalyticsCard
            current={600}
            previous={450}
            fore="text-green-600"
            bg="bg-green-50"
            analytic="Parents"
            parentIcon={<RiParentFill />}
          />
        </div>
      </div>
      <div className="flex gap-3 flex-wrap max-w-full ">
        <div className="flex flex-1">
          <PerformanceComponet />
        </div>
        <div className="bg-white p-3 rounded-md flex flex-col gap-3 w-full md:w-[25%]">
          <h1 className="text-md font-bold">Student Distribution</h1>
          <Donut />
        </div>
      </div>
      <div className="flex gap-3 flex-wrap">
        <div className="bg-white p-3 rounded-md gap-3 flex-[2]">
          <p className="font-bold text-md">Internal Performance - Term 1</p>
          <StudentList />
          <a href="">View All</a>
        </div>
        <div className="bg-white p-3 rounded-md gap-3 flex-[1]">
          <p className="font-bold text-md">School Notice Board</p>
          <Notice
            title="New Teacher"
            description="New Teacher Onboarded Today"
            time="2024-11-01T16:00:00"
            icon={<FaChalkboardTeacher />}
            bgColor="bg-blue-100"
            text="text-blue-600"
          />
          <Notice
            title="Principal Speech"
            description="First inaugral speech from the Principal"
            time="2024-11-01T16:00:00"
            icon={<TbPictureInPictureTop />}
            bgColor="bg-purple-100"
            text="text-purple-600"
          />
          <button className="p-1 mt-6 bg-purple-100 rounded-md text-sm w-full font-bold tracking-wider   text-purple-600">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
