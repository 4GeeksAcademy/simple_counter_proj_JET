import React, { useState, useEffect } from "react";

//create your first component
const SecondsCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const ones = Math.floor(count / 1) % 10;
  const tens = Math.floor(count / 10) % 10;
  const hundreds = Math.floor(count / 100) % 10;
  const thousands = Math.floor(count / 1000) % 10;
  const tenThousands = Math.floor(count / 10000) % 10;
  const hundredThousands = Math.floor(count / 100000) % 10;

  const digits = [hundredThousands,tenThousands, thousands, hundreds, tens, ones];

  return (
    <div className="d-flex align-items-center">
        {digits.map((d, i) => (
            <span key={i} className="fs-2 mx-1">{d}</span>
      ))}
    </div>
  );
};

export default SecondsCounter;
