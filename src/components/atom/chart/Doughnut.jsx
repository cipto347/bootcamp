import React from "react";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend);

export const data = {
  datasets: [
    {
      data: [33, 33],
      backgroundColor: ["Purple", "Black"],
    },
  ],
};

const options = {
  rotation: 270,
  circumference: 180,
  cutout: 125,
  borderRadius: 10,
};

function ChartDoughnut() {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default ChartDoughnut;
