import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";

const Home = () => {
  const [startVal, setStartVal] = useState(60);

  return (
    <div className="container py-5">
      {/* Input to choose starting seconds */}
      <div className="mb-4 text-center">
        <label className="form-label me-2">Start from:</label>
        <input
          type="number"
          className="form-control d-inline-block w-auto"
          value={startVal}
          onChange={e => setStartVal(Number(e.target.value))}
          min="0"
        />
      </div>

      {/* The countdown timer itself */}
      <CountdownTimer initialCount={startVal} />
    </div>
  );
};

export default Home;