import React, { useState, useEffect, useRef } from "react";
import ClockImage from "./ClockImage";     
import "bootstrap/dist/css/bootstrap.min.css";

const CountdownTimer = ({ initialCount = 60 }) => {
  const [count, setCount] = useState(initialCount);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && count > 0) {
      intervalRef.current = setInterval(() => {
        setCount(c => c - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, count]);

  useEffect(() => {
    if (count === 0) {
      setIsRunning(false);
    }
  }, [count]);

  const handleStop   = () => setIsRunning(false);
  const handleResume = () => { if (count > 0) setIsRunning(true); };
  const handleReset  = () => {
    setIsRunning(false);
    setCount(initialCount);
  };


  const digits = String(count).padStart(6, "0").split("");

  return (
    <div className="text-center">
    
      <div className="d-inline-flex align-items-center bg-dark text-white p-3 rounded">
        <ClockImage size="2x" className="me-3" />
        {digits.map((d, i) => (
          <span key={i} className="fs-2 mx-1">{d}</span>
        ))}
      </div>

      <div className="mt-3">
        <button onClick={handleStop}   className="btn btn-danger me-2">Stop</button>
        <button onClick={handleResume} className="btn btn-success me-2">Resume</button>
        <button onClick={handleReset}  className="btn btn-secondary">Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;