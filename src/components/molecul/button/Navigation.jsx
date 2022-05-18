import propTypes from "prop-types";
import React from "react";

function ButtonNavigation(props) {
  const { num } = props;
  return (
    <div>
      <button className="rounded-full  h-10 w-10 bg-transparent text-white">
        {num}
      </button>
    </div>
  );
}

ButtonNavigation.propTypes = {
  num: propTypes.string.isRequired,
};

export default ButtonNavigation;
