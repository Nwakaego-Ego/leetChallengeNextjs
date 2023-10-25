"use client";
import React, { useState } from "react";
import "./display.css";

const Display = () => {
  const [showResult, setShowResult] = useState(false);
  const numberList = [2, 4, 6, 8];

  const recalculate = () => {
    const elementLength = numberList.map((num) => num * numberList.length);
    const result = elementLength.join(", ");
    return result;
  };

  const handleToggle = () => {
    setShowResult(!showResult);
  };

  return (
    <div className=" main min-h-screen flex flex-col items-center justify-center">
      <div className="snake-container relative">
        <span className="snake snake-top"></span>
        <span className="snake snake-right"></span>
        <button
          onClick={handleToggle}
          className="toggleButton text-[#2F2F2F] font-bold rounded shadow-md transition duration-500 animate-moveButton"
        >
          {showResult ? (
            <span className="calculate">Hide Result</span>
          ) : (
            <span className="calculate">Calculate</span>
          )}
        </button>
        <span className="snake snake-bottom"></span>
        {/* <span className="snake snake-left"></span> */}
        <div className="snake-left-container">
          <span className="snake-left"></span>
        </div>
      </div>

      {showResult && (
        <div className="mt-4 p-3 border border-gray-300 rounded shadow-md">
          <div className="font-bold text-lg mb-2">Result:</div>
          <div>{recalculate()}</div>
        </div>
      )}
    </div>
  );
};

export default Display;
