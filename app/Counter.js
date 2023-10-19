"use client";
import React, { useState } from "react";
const Counter = () => {
  const [increment, setIncrement] = useState(0);

  const handleClick = () => {
    setIncrement(increment + 1);
  };

  return (
    <>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10"
          onClick={handleClick}
        >
          Increment
        </button>
        <p>increment : {increment}</p>
      </div>
    </>
  );
};

export default Counter;
