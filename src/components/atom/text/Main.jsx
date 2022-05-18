import React from "react";
import propTypes from "prop-types";

function TextMain(props) {
  const { textProps } = props;
  return <article className="text-main">{textProps}</article>;
}

TextMain.propTypes = {
  textProps: propTypes.string.isRequired,
};
export default TextMain;
