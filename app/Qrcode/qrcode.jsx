"use client";
import React, { useState } from "react";
import QRCode from "qrcode";
import "./qrcode.css";

const qrcode = () => {
  const [qr, setQr] = useState("");

  const generateQr = () => {
    setQr(
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
    );
  };
  return (
    <>
      <div>
        <div className="text-white">QRCODE GENERATOR</div>
        <input type="text" />
        <button onClick={generateQr}>Generate Code</button>
        <p>{qr}</p>
      </div>
    </>
  );
};

export default qrcode;
