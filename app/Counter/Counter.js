"use client";
import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [increment, setIncrement] = useState(0);

  const handleClick = () => {
    setIncrement(increment + 1);
  };

  return (
    <>
      <div className="">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10"
            onClick={handleClick}
          >
            Increment
          </button>
          <p>increment : {increment}</p>
        </div>
        <div className="">
          <div className="container">
            <div className="">
              <div className="header">
                <img src="./master-logo.png" className="logo" />
                <h4>Master Class</h4>
                <img src="./master-chip.png" className="chip" />
              </div>
              <div>
                <p className="text-red-600">Card Number</p>
                <p>6024 5893 2438 4801 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
