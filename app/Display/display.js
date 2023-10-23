// "use client";
// import React, { useState } from "react";

// const Display = () => {
//   const [showResult, setShowResult] = useState(false);
//   let numberList = [2, 4, 6, 8];

//   const recalculate = () => {
//     let elementLength = numberList.map((num) => {
//       return num * numberList.length;
//     });

//     const result = elementLength.join(", ");
//     return result;
//   };

//   const handleToggle = () => {
//     setShowResult(!showResult);
//   };

//   return (
//     <div class="min-h-screen flex  flex-row items-center justify-center relative">
//       <button
//         onClick={handleToggle}
//         className="bg-lime-500 hover:bg-lime-600 text-[#2F2F2F] font-bold py-2 px-4 rounded p-10 transition duration-500"
//       >
//         {showResult ? "Hide Result" : "Calculate"}
//       </button>

//       {showResult && <div> {recalculate()}</div>}
//     </div>
//   );
// };

// export default Display;

"use client";
import React, { useState } from "react";

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
    <div className="min-h-screen flex flex-col items-center justify-center">
      <button
        onClick={handleToggle}
        className="bg-lime-500 hover:bg-lime-600 text-[#2F2F2F] font-bold py-2 px-4 rounded p-3 shadow-md transition duration-500"
      >
        {showResult ? "Hide Result" : "Calculate"}
      </button>

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
