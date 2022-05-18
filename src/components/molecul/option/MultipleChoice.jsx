import React from "react";
import propTypes from "prop-types";

function OptionMultipleChoice(props) {
  const { option, contentOption } = props;
  return (
    <div className="flex item-center gap-2">
      <figure className="rounded-full h-8 w-8 bg-gray-100 text-option">
        {option}
      </figure>
      <article className="text-content-option">{contentOption}</article>
    </div>
  );
}

OptionMultipleChoice.propTypes = {
  option: propTypes.string.isRequired,
  contentOption: propTypes.string.isRequired,
};
export default OptionMultipleChoice;
