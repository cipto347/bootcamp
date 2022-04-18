import { faker } from "@faker-js/faker";
import { useState } from "react";
// import propTypes from "prop-types";
import ChartBar from "../../components/molekul/chart/Bar";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function DocChart() {
  // const { preview, code, title } = props;
  return (
    <div className="rounded-xl relative overflow-x-auto">
      <div className="preview shadow border-base-300 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4">
        <ChartBar data={data} options={options} />
      </div>
    </div>
  );
}

// DocChart.propTypes = {
//   title: propTypes.string.isRequired,
//   preview: propTypes.element.isRequired,
//   code: propTypes.element.isRequired,
// };

export default DocChart;
