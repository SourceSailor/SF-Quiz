import { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    // Set a timeout to call onTimeout after the specified timeout duration
    const timeoutId = setTimeout(() => {
      onTimeout();
    }, timeout);

    // Cleanup the timeout when the component unmounts or when the effect re-runs
    return () => clearTimeout(timeoutId);
  }, [timeout, onTimeout]);

  useEffect(() => {
    // Set an interval to update the remaining time every 100ms
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    // Cleanup the interval when the component unmounts or when the effect re-runs
    return () => clearInterval(intervalId);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
