import React from "react";
import ImagesIconTimer from "../../atom/images/IconTimer";
import TextTimer from "../../atom/text/Timer";

function TimerProgress() {
  return (
    <div className="flex items-center gap-1 mt-2 px-2">
      <TextTimer timer="24s" />
      <ImagesIconTimer />
      <progress
        class="progress progress-error w-full"
        value="70"
        max="100"
      ></progress>
    </div>
  );
}

export default TimerProgress;
