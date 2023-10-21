"use client";
import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import "./globals.css";

const Input = () => {
  const [name, setName] = useState("");
  const [value] = useDebounce(name, 3000);
  const [showMessage, setShowMessage] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    setShowMessage(true);
  };

  return (
    <div className="p-10">
      <input
        type="text"
        placeholder="Enter name...."
        onChange={handleNameChange}
        value={name}
        className="text-blue-600"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded p-10"
      >
        Submit
      </button>
      {(value || showMessage) && (
        <p className="text-blue-700">Hope you are having a swell day {value}</p>
      )}
    </div>
  );
};

export default Input;
