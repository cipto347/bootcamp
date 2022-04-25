import propTypes from "prop-types";

function BtnBackModal(props) {
  const { propFor } = props;
  return (
    <label htmlFor={propFor} className="btn btn-sm btn-link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 stroke-primary"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </label>
  );
}

BtnBackModal.propTypes = {
  propFor: propTypes.string.isRequired,
};

export default BtnBackModal;
