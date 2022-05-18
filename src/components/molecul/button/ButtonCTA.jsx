import React from "react";
import propTypes from "prop-types";

function ButtonCTA(props) {
  const { textBtn } = props;
  return (
    <button type="button" className="btn btn-gradient text-white border-none">
      {textBtn}
    </button>
  );
}

ButtonCTA.propTypes = {
  textBtn: propTypes.string.isRequired,
};
export default ButtonCTA;
