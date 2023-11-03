"use client";

import React, { useState } from "react";
import QRCode from "qrcode.react";

const QrCode = () => {
  const [qrData, setQrData] = useState("");

  const generateQr = () => {
    const inputData = document.getElementById("qr-input").value;
    setQrData(inputData);
  };

  return (
    <>
      <div className="bg-red-600 w-full h-full ">
        <div className="text-white">QR CODE GENERATOR</div>
        <input
          type="text"
          id="qr-input"
          placeholder="Enter data for QR code"
          className="text-blue-600"
        />
        <button onClick={generateQr}>Generate Code</button>

        <QRCode value={qrData} />
      </div>
    </>
  );
};

export default QrCode;
