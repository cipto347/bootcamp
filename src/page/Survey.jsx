import React from "react";
import GroupQuestion from "../components/molecul/group/Question";
import Navbar from "../components/molecul/navbar/Navbar";
import TimerProgress from "../components/molecul/timer/Progress";
import SurveyBackground from "../../src/asset/bg-survey.png";
import ButtonOption from "../components/molecul/button/ButtonOption";

function Survey() {
  return (
    <div style={{ backgroundImage: `url(${SurveyBackground})` }}>
      <Navbar />
      <TimerProgress />
      <GroupQuestion />
      <ButtonOption />
    </div>
  );
}

export default Survey;
