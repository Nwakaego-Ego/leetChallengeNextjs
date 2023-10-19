// // "use client";
// // import React, { useEffect, useState } from "react";

// // import "./globals.css";

// // const InputMessage = () => {
// //   const [message, setMessage] = useState(false);
// //   const [displayMessage, setDisplayMessage] = useState(false);

// //   const visitor = (e) => {
// //     setMessage(e.target.value);
// //   };

// //   const handleSubmit = () => {
// //     setDisplayMessage(true);
// //   };

// //   useEffect(() => {
// //     let timeout;

// //     clearTimeout(timeout);

// //     timeout = setDisplayMessage(() => {
// //       setDisplayMessage(true);
// //     }, 1000);

// //     return () => {
// //       clearTimeout(timeout);
// //     };
// //   }, [message]);

// //   return (
// //     <div className="p-10">
// //       <input type="text" placeholder="Enter name...." onChange={visitor} />
// //       <button
// //         onClick={handleSubmit}
// //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10"
// //       >
// //         Submit
// //       </button>
// //       {displayMessage && <p>Hope you are having a swell day {message}</p>}
// //     </div>
// //   );
// // };

// // export default InputMessage;

// // "use client";
// // import React, { useState, useEffect } from "react";
// // // import { debounce } from "debounce";
// // // import debounce from "lodash/debounce";
// // import "./globals.css";

// // const InputMessage = () => {
// //   const [message, setMessage] = useState("");
// //   const [displayMessage, setDisplayMessage] = useState(false);

// //   const visitor = (e) => {
// //     setMessage(e.target.value);
// //   };

// //   const handleSubmit = () => {
// //     setDisplayMessage(true);
// //   };

// //   const delayedMessageUpdate = debounce((value) => {
// //     setMessage(value);
// //   }, 1000);

// //   useEffect(() => {
// //     delayedMessageUpdate(message);
// //   }, [message]);

// //   return (
// //     <div className="p-10">
// //       <input type="text" placeholder="Enter name...." onChange={visitor} />
// //       <button
// //         onClick={handleSubmit}
// //         className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded p-10"
// //       >
// //         Submit
// //       </button>
// //       {displayMessage && <p>Hope you are having a swell day {message}</p>}
// //     </div>
// //   );
// // };

// // export default InputMessage;

// "use client";
// import React, { useState, useEffect } from "react";
// import "./globals.css";

// const InputMessage = () => {
//   const [message, setMessage] = useState("");
//   const [displayMessage, setDisplayMessage] = useState(false);
//   const [debounceValue, setDebounceValue] = useEffect(value)

//   const visitor = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = () => {
//     setDisplayMessage(true);
//   };

//  useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebounceValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debounceValue;
// }

//   return (
//     <div className="p-10">
//       <input type="text" placeholder="Enter name...." onChange={visitor} />
//       <button
//         onClick={handleSubmit}
//         className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded p-10"
//       >
//         Submit
//       </button>
//       {displayMessage && <p>Hope you are having a swell day {message}</p>}
//     </div>
//   );
// };

// export default InputMessage;

"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";

const InputMessage = () => {
  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState(false);

  const visitor = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    // setDisplayMessage(true);
    useDebounce();
  };

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const debouncedMessage = useDebounce(message, 1000);

  return (
    <div className="p-10">
      <input type="text" placeholder="Enter name...." onChange={visitor} />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded p-10"
      >
        Submit
      </button>
      {displayMessage && (
        <p>Hope you are having a swell day {debouncedMessage}</p>
      )}
    </div>
  );
};

export default InputMessage;