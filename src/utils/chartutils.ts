import { ChartData, ChartOptions } from "chart.js";

export const data: ChartData<"doughnut", number[], string> = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "Student Distribution",
      data: [1700, 1800],
      backgroundColor: ["#7c3aed", "#a855f7"],
      borderColor: "transparent",
    },
  ],
};
export const options: ChartOptions = {
  elements: {},
};
export const barData = {
  labels: ["Form One", "Form Two", "Form Three", "Form Four"],
  datasets: [
    {
      label: "South",
      data: [453, 677, 733, 456],
      backgroundColor: "#ec4899",
      borderColor: "transparent",
    },
    {
      label: "North",
      data: [500, 600, 415, 635],
      backgroundColor: "#7c45ed",
      borderColor: "transparent",
    },
  ],
};
export const combinedData = {
  labels: ["Form One", "Form Two", "Form Three", "Form Four"],
  datasets: [
    {
      label: "Total Students",
      data: [953, 1277, 1148, 1093],
      backgroundColor: "#7c45ed",
      borderColor: "transparent",
    },
  ],
};
