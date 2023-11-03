// "use client";
// import React, { useState } from "react";

// import "./Counter.css";

// const Counter = () => {
//   const [increment, setIncrement] = useState(0);

//   const handleClick = () => {
//     setIncrement(increment + 1);
//   };

//   return (
//     <>
//       <div className="">
//         <div>
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10"
//             onClick={handleClick}
//           >
//             Increment
//           </button>
//           <p>increment : {increment}</p>
//         </div>
//         <div className="">
//           <div className="container">
//             <div className="">
//               <div className="header">
//                 <img src="./master-logo.png" className="logo" />
//                 <h4 className="masterCard">Kaego's Card</h4>
//                 <img src="./master-chip.png" className="chip" />
//               </div>
//               <div>
//                 <div className="card-valid">
//                   <div>Card Number</div>
//                   <div className="valid vd">Valid thru</div>
//                 </div>
//                 <div className="code">
//                   <div className="number">6024 5893 2438 4801 </div>
//                   <div className="date vd">04/17</div>
//                 </div>
//                 <p className="nwakaego">Nwakaego Nwaekpe</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Counter;

import React, { useState } from "react";

function example() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <>
      <div>Count</div>
      <button onClick={handleClick}>Count</button>
    </>
  );
}

export default example;
