import propTypes from "prop-types";

function CardDashboard(props) {
  const { title, info } = props;
  return (
    <div className="card w-full bg-base-100 shadow-xl lg:max-w-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="py-4">{info}</p>
        <div className="card-actions justify-end">
          <button type="button" className="btn btn-primary btn-md w-full">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
}

CardDashboard.propTypes = {
  title: propTypes.string.isRequired,
  info: propTypes.string.isRequired,
};

export default CardDashboard;
