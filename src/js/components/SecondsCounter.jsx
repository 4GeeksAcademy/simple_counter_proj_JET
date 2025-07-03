import React, { useState, useEffect } from "react";

//create your first component
const SecondsCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const ones = Math.floor(count / 1) % 10;
  const tens = Math.floor(count / 10) % 10;
  const hundreds = Math.floor(count / 100) % 10;
  const thousands = Math.floor(count / 1000) % 10;
  const tenthousands = Math.floor(count / 10000) % 10;
  const hundredhousands = Math.floor(count / 100000) % 10;

  const digits = [hundredhousands,tenthousands, thousands, hundreds, tens, ones];

  return (
    <div className="d-flex justify-content-center mt-5">
        {digits.map((digit, index) => (
            <div
        key={index}
          className="bg-dark text-white d-flex justify-content-center align-items-center m-2"
          style={{
            width: "80px",
            height: "80px",
            fontSize: "2.5rem",
            borderRadius: "0.5rem"
          }}
          >
            {digit}
            </div>
        ))}
        </div>
  );
};

export default SecondsCounter;
