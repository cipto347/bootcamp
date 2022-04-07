import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import propTypes from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartBar(props) {
  const { options, data } = props;

  return <Bar options={options} data={data} type="bar" />;
}

ChartBar.propTypes = {
  options: propTypes.objectOf(
    propTypes.oneOfType([
      propTypes.string,
      propTypes.bool,
      propTypes.object,
      propTypes.number,
      propTypes.array,
    ])
  ),
  data: propTypes.objectOf(
    propTypes.oneOfType([
      propTypes.string,
      propTypes.bool,
      propTypes.object,
      propTypes.number,
      propTypes.array,
    ])
  ),
};

ChartBar.defaultProps = {
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar chart rendered",
      },
    },
  },
  data: {
    labels: "",
    datasets: [],
  },
};

export default ChartBar;
