"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./globals.css";

const InputMessage = () => {
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const isModalOpen = () => {
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  const messageInfo = (e) => {
    setMessage(e.target.value);
  };

  // useEffect(() => {
  //   setOpenModal(true);
  // }, []);

  return (
    <div className="p-10">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10">
        Submit
      </button>
      {/* <p>{message}</p> */}
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={isModalOpen}
        onRequestClose={modalClose}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "#2F2F2F",
          },
        }}
      >
        <div className="inputbox">
          <input className="input" type="text" required="required" />
          <span>Enter Name</span>
        </div>
        <button
          onClick={modalClose}
          className="bg-lime-500 hover:bg-lime-600 text-[#2F2F2F] font-bold py-2 px-4 rounded p-10 mt-8 transition duration-500"
        >
          close
        </button>
      </Modal>
    </div>
  );
};

export default InputMessage;
