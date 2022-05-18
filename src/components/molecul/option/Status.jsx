import React from "react";
import propTypes from "prop-types";

function OptionStatus(props) {
  const { statusContent } = props;
  return (
    <div className="bg-gray-200 rounded-lg p-2 mt-1">
      <article className="text-content-oprion">{statusContent}</article>
    </div>
  );
}

OptionStatus.propTypes = {
  statusContent: propTypes.string.isRequired,
};
export default OptionStatus;
