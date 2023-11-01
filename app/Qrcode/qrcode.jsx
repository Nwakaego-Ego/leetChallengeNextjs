// "use client";
// import React, { useState } from "react";
// import QRCode from "qrcode";
// import "./qrcode.css";

// const qrcode = () => {
//   const [qr, setQr] = useState("");

//   const generateQr = () => {
//     setQr(
//       "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
//     );
//   };
//   return (
//     <>
//       <div>
//         <div className="text-white">QRCODE GENERATOR</div>
//         <input type="text" />
//         <button onClick={generateQr}>Generate Code</button>
//         <p>{qr}</p>
//       </div>
//     </>
//   );
// };

// export default qrcode;

"use client";

import React, { useState } from "react";
import QRCode from "qrcode.react"; // Import the QRCode component
import "./qrcode.css";

const QrCode = () => {
  const [qrData, setQrData] = useState(""); // Use a state variable for the QR code data

  const generateQr = () => {
    // Retrieve the data from the input field and update the state
    const inputData = document.getElementById("qr-input").value;
    setQrData(inputData);
  };

  return (
    <>
      <div>
        <div className="text-white">QR CODE GENERATOR</div>
        <input
          type="text"
          id="qr-input"
          placeholder="Enter data for QR code"
          className="text-blue-600"
        />
        <button onClick={generateQr}>Generate Code</button>
        {/* Render the QRCode component with the updated data */}
        <QRCode value={qrData} />
      </div>
    </>
  );
};

export default QrCode;
