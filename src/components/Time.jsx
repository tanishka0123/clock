import { useState, useEffect } from "react";
import React from "react";

const Time = () => {
  const [time, setTime] = useState(0); 
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((curr) => curr + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const getHours = (timeInSeconds) => {
    return String(Math.floor(timeInSeconds / 3600)).padStart(2, "0");
  };

  const getMinutes = (timeInSeconds) => {
    return String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, "0");
  };

  const getSeconds = (timeInSeconds) => {
    return String(timeInSeconds % 60).padStart(2, "0");
  };

  return (
    <>
      <div className="time-display">
        <span>{getHours(time)}</span>:<span>{getMinutes(time)}</span>:<span>{getSeconds(time)}</span>
      </div>
      <div className="button-container">
        {running ? (
          <button className="button button-stop" onClick={() => setRunning(false)}>Stop</button>
        ) : (
          <button className="button button-start" onClick={() => setRunning(true)}>Start</button>
        )}
        <button className="button button-restart" onClick={() => setTime(0)}>Restart</button>
      </div>
    </>
  );
};

export default Time;
