"use client";
import React, { useState } from "react";

const tobe = () => {
  const [val, setVal] = useState(5);
  const [equal, setEqual] = useState("");
  const [notEqual, setNotEqual] = useState("");
  const [output, setOutput] = useState("");

  function equalVal(e) {
    setEqual(e.target.value);
  }

  function notEqualVal(e) {
    setNotEqual(e.target.value);
  }

  function tobe() {
    if (val === equal) {
      setOutput("Equal");
    } else {
      setOutput("");
    }
  }

  function notToBe() {
    if (val !== notEqual) {
      setOutput("Not Equal");
    } else {
      setOutput("");
    }
  }

  return (
    <>
      <div class="min-h-screen flex flex-col items-center justify-center relative">
        <input
          type="text"
          placeholder="Equal......"
          className="m-5 text-blue-700"
          value={equal}
          onChange={equalVal}
        />
        <input
          type="text"
          placeholder="Not Equal.. ......"
          className="m-5 text-blue-700"
          value={notEqual}
          onChange={notEqualVal}
        />

        <button
          className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded p-10 m-5"
          onClick={tobe}
        >
          Equal
        </button>

        <button
          className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded p-10 m-5 "
          onClick={notToBe}
        >
          Not Equal
        </button>
        <p className="text-blue-600"> Result : {output}</p>
      </div>
    </>
  );
};

export default tobe;
