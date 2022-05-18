import propTypes from "prop-types";
import React from "react";

function OptionBadge(props) {
  const { textBadge } = props;
  return (
    <span className="badge bg-gray-200 text-slate-400 py-4 px-2 rounded absolute -top-20 -right-20">
      {textBadge}
    </span>
  );
}

OptionBadge.propTypes = {
  textBadge: propTypes.string.isRequired,
};
export default OptionBadge;
