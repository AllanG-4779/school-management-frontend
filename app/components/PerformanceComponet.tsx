"use client";
import React from "react";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";

const PerformanceComponet = () => {
  const [year, setYear] = React.useState("none");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
  };

  return (
    <div className="flex bg-white p-3  rounded-md shadow-sm flex-col gap-3 w-full min-h-[25rem]">
      <div className="flex justify-between ">
        <p className="font-bold text-md">
          {year == "none"
            ? "National Exams (KCSE) Trend"
            : `Performance per subject Year - ${year}`}
        </p>
        <select name="year" id="kcse-year" onChange={handleChange}>
          <option value="none">Select</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      {year == "none" ? <LineGraph /> : <BarGraph />}
    </div>
  );
};

export default PerformanceComponet;
