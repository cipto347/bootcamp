import React from "react";
import propTypes from "prop-types";

function TextTimer(props) {
  const { timer } = props;
  return <article className="">{timer}</article>;
}

TextTimer.propTypes = {
  timer: propTypes.string.isRequired,
};

export default TextTimer;
