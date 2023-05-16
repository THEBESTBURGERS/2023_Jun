import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber((prev) => prev + 1);
  };
  const onDecreaser = () => {
    setNumber((prev) => prev - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
}

export default Counter;
