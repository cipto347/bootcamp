import React from "react";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend);

export const data = {
  datasets: [
    {
      data: [25, 25, 25, 25],
      backgroundColor: ["#5C2D93", "#712085", "#BF58A7", "#DA5C8C"],
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
