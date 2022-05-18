import React from "react";
import propTypes from "prop-types";

function TextDescription(props) {
  const { desc } = props;
  return (
    <article className="text-description w-1/2 mx-auto text-center">
      {desc}
    </article>
  );
}

TextDescription.propTypes = {
  desc: propTypes.string.isRequired,
};
export default TextDescription;
