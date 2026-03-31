"use client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend,Tooltip);

export default function Chart() {
  const data = {
    labels: ["9:15", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"],
    datasets: [
      {
        label: "NIFTY Price",
        data: [22450, 22500, 22480, 22550, 22600, 22580, 22650],
        borderColor: "#22c55e",
        backgroundColor: "#22c55e",
        tension: 0.4,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "white" },
      },
      y: {
        ticks: { color: "white" },
      },
    },
  };
  return <Line data={data} options={options} />;
}
