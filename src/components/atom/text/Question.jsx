import React from "react";
import propTypes from "prop-types";

function TextQuestion(props) {
  const { question } = props;
  return <article className="text-question">{question}</article>;
}

TextQuestion.propTypes = {
  question: propTypes.string.isRequired,
};
export default TextQuestion;
