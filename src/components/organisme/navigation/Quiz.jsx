import propTypes from "prop-types";
import React from "react";
import ButtonNext from "../../atom/button/Next";
import ButtonPrev from "../../atom/button/Prev";
import ButtonNavigation from "../../molecul/button/Navigation";

function NavQuiz(props) {
  const { answer, currentState, totalQuiz } = props;

  const loopArray = totalQuiz.map((item, index) => (
    <ButtonNavigation
      num={item}
      propClass={
        totalQuiz[index] === currentState
          ? `bg-active`
          : answer[index]
          ? `bg-nav-green`
          : `bg-transparent`
      }
    />
  ));
  return (
    <div className="flex flex-row gap-2">
      <div id="prev">
        <ButtonPrev />
      </div>
      <div id="nav" className="flex gap-2">
        {loopArray}
      </div>
      <div id="next">
        <ButtonNext />
      </div>
    </div>
  );
}

NavQuiz.propTypes = {
  answer: propTypes.array.isRequired,
  currentState: propTypes.array.isRequired,
  totalQuiz: propTypes.array.isRequired,
};

export default NavQuiz;
