"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 12,
      },
    },
  };

  const data = {
    labels: [
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
    ],
    datasets: [
      {
        label: "KCSE Performance",
        data: [7.6, 6.3, 6, 3, 7, 5.8, 5.6, 3, 8.7, 8, 7, 8.3],
        borderColor: "rgba(75, 192, 192, 1)",
        // fill:true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="h-full">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineGraph;
