import { useState, useEffect } from "react";
import propTypes from "prop-types";

function Timer(props) {
  const { initialMinute = 0, initialSeconds = 0, onFinish } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          onFinish();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="pl-1">
      {minutes === 0 && seconds === 0 ? null : (
        <span>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      )}
    </div>
  );
}

Timer.propTypes = {
  initialMinute: propTypes.any.isRequired,
  initialSeconds: propTypes.any.isRequired,
  onFinish: propTypes.func.isRequired,
};

export default Timer;
