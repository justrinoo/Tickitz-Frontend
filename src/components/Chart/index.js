import React from "react";
import { Line } from "react-chartjs-2";
export const ChartMovie = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Statistic Movie",
        backgroundColor: "#5F2EEA",
        borderColor: "#5F2EEA",
        data: [0, 10, 5, 45, 20, 30, 45]
      }
    ]
  };
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true
    }
  };
  return (
    <>
      <Line data={data} options={config} />
    </>
  );
};
