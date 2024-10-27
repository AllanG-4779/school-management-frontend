import React from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { SiStaffbase } from "react-icons/si";


const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full gap-3 flex-wrap">
        <AnalyticsCard
          current={120500}
          previous={990}
          analytic="Total Students"
          parentIcon={<PiStudent />}
        />
        <AnalyticsCard
          current={450}
          previous={550}
          analytic="Teachers"
          parentIcon={<GiTeacher />}
        />
        <AnalyticsCard
          current={45}
          previous={42}
          analytic="Non Teaching"
          parentIcon={<SiStaffbase />}
        />
        <AnalyticsCard
          current={600}
          previous={450}
          analytic="Parents"
          parentIcon={<SiStaffbase />}
        />
      </div>
      <div className="flex bg-white p-3 rounded-md shadow-sm flex-col">
        <p>Previous National Performance</p>
       
      </div>
    </div>
  );
};

export default DashboardPage;
