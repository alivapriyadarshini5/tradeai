"use client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Chart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Stock Price",
        data: [100, 120, 110, 140, 160],
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return <Line data={data} />;
}
