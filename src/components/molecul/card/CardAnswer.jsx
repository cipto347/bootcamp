import React from "react";
import propTypes from "prop-types";

function CardAnswer(props) {
  const { textProps } = props;
  return (
    <div class="card w-96 bg-">
      <div class="card-body">
        <p>{textProps}</p>
      </div>
    </div>
  );
}

CardAnswer.propTypes = {
  textProps: propTypes.string.isRequired,
};
export default CardAnswer;
