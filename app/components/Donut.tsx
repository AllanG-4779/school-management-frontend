"use client";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip);

const Donut = () => {
  const options = {
    responsive: true,
    // maintainAspectRatio: false,
  }; 
  const finalData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [1500, 4000],
        backgroundColor: ["#FF6384", "#36A2EB"],
        borderColor: ["#FF6384", "#36A2EB"],
        borderWidth: 1,
        dataVisibility: true,
      },
    ],
  };
  return <Doughnut options={options} data={finalData} tabIndex={3} />;
};

export default Donut;
