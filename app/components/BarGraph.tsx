"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = () => {
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
  const colorMatrix = [
    "rgba(245, 243, 255, 0.1)", // Purple-100 with 10% opacity
    "rgba(245, 243, 255, 0.2)", // Purple-100 with 20% opacity
    "#cffafe", // Purple-200 with 30% opacity
    "#a5f3fc", // Purple-300 with 40% opacity
    "#67e8f9", // Purple-400 with 50% opacity
    "#22d3ee", // Purple-500 with 60% opacity
    "#06b6d4", // Purple-600 with 70% opacity
    "#0891b2", // Purple-700 with 80% opacity
    "#0e7490", // Purple-800 with 90% opacity
    "#155e75", // Purple-900 with 100% opacity
    "#164e63", // Custom Purple-1000 with 100% opacity
    "#082f49", // Custom Purple-1200 with 100% opacity
  ];

  const datapoints = [7.6, 6.3, 6, 3, 7, 5.8, 5.6, 3, 8.7, 8, 7, 8.3];

  const colors = datapoints.map(
    (data: number) => colorMatrix[Math.ceil(data) - 1]
  );

  const data = {
    labels: [
      "ENG",
      "KIS",
      "MAT",
      "BIO",
      "CHE",
      "CRE",
      "HIS",
      "GEO",
      "AGR",
      "BST",
      "PHY",
      "COM",
    ],
    datasets: [
      {
        label: "KCSE Performance Per Subject",
        data: datapoints,
        backgroundColor: colors,
        borderColor: "rgba(75, 192, 192, 1)",
        // fill:true,
        tension: 0.3,
      },
    ],
  };
  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
