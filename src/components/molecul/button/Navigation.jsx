import propTypes from "prop-types";
import React from "react";

function ButtonNavigation(props) {
  const { num, propClass } = props;

  return (
    <button className={`rounded-full  h-10 w-10 ${propClass} text-white`}>
      {num}
    </button>
  );
}

ButtonNavigation.propTypes = {
  num: propTypes.string.isRequired,
  propClass: propTypes.string.isRequired,
};

export default ButtonNavigation;
