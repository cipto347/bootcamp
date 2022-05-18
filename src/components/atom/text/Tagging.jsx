import React from "react";
import propTypes from "prop-types";

function TextTagging(props) {
  const { propsText } = props;
  return <article className="text-tagging">{propsText}</article>;
}

TextTagging.propTypes = {
  propsText: propTypes.string.isRequired,
};
export default TextTagging;
