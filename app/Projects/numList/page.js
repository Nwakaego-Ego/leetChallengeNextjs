"use client";

import React, { useState } from "react";

const numList = () => {
  const [init, setInit] = useState();
  const [nums, setNums] = useState();
  const [result, setResult] = useState();

  const initialInput = (event) => {
    setInit(event.target.value);
  };

  const numsInput = (event) => {
    setNums(event.target.value);
  };

  function reducerCalculator() {
    let initialValue = parseFloat(init);
    let number = parseFloat(nums);

    if (!isNaN(number) && !isNaN(initialValue)) {
      setResult(initialValue - number);
    } else {
      setResult("Please input a number .....");
    }
  }

  return (
    <>
      <div>Dynamic Number List</div>
      <input
        type="text"
        placeholder="Input initial value......"
        onChange={initialInput}
        className="text-black"
      />
      <input
        type="text"
        placeholder="Input number......"
        className="m-10 text-black"
        onChange={numsInput}
      />
      <button
        onClick={reducerCalculator}
        className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded p-10"
      >
        Result
      </button>

      <p>Number: {nums}</p>
      <p>Initial Value: {init}</p>
      <p> Result: {result}</p>
    </>
  );
};

export default numList;
