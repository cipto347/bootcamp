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
  const [active, setActive] = useState("preview");
  return (
    <div className="component-preview not-prose text-base-content my-4 max-w-4xl">
      <div className="pb-2 text-sm font-bold">
        <span className="opacity-20 hover:opacity-60"># </span>
        <span className="component-preview-title">title</span>
      </div>
      <div className="tabs z-10 -mb-px">
        <button
          type="button"
          className={
            `${active}` === "preview"
              ? "tab tab-lifted tab-active"
              : "tab tab-lifted"
          }
          onClick={() => setActive("preview")}
        >
          Preview
        </button>
        <button
          type="button"
          className={
            `${active}` === "code"
              ? "tab tab-lifted tab-active"
              : "tab tab-lifted"
          }
          onClick={() => setActive("code")}
        >
          Code
        </button>
      </div>
      {active === "preview" && (
        <div className="rounded-b-box rounded-tr-box relative overflow-x-auto">
          <div className="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4">
            <ChartBar data={data} options={options} />
          </div>
        </div>
      )}
      {active === "code" && (
        <div className="grid">
          <div className="code-wrapper col-start-1 row-start-1 bg-base-200">
            <code>
              {"html { background: red; }"}
              <br />
              {"body { color: blue; }"}
              <br />
            </code>
          </div>
          <div className="col-start-1 row-start-1 flex items-start justify-end p-2">
            <div
              data-tip="copy"
              className="tooltip tooltip-left tooltip-accent"
            >
              <button type="button" className="btn btn-square btn-sm">
                <svg
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// DocChart.propTypes = {
//   title: propTypes.string.isRequired,
//   preview: propTypes.element.isRequired,
//   code: propTypes.element.isRequired,
// };

export default DocChart;
