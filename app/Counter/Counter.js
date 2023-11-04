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

import React from "react";
import { useFormStatus } from "react-dom";
import { submitForm } from "./actions.js";

// Component for the submit button
function Submit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

// Component for the form
function Form({ action }) {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}

// Main App component
export default function App() {
  return <Form action={submitForm} />;
}
