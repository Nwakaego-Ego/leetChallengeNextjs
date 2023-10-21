"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { useDebounce } from "use-debounce";
import "./lnputMessage.css";

const InputMessage = () => {
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(true);
  const [name, setName] = useState("");
  const [value] = useDebounce(name, 3000);
  const [showMessage, setShowMessage] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    setShowMessage(true);
  };

  const isModalOpen = () => {
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  const messageInfo = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="p-10">
      <Modal
        isOpen={openModal}
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
          <input
            className="input"
            type="text"
            required="required"
            onChange={handleNameChange}
            value={name}
          />
          <span>Enter Name</span>
        </div>
        <button
          onClick={modalClose}
          className="bg-lime-500 hover:bg-lime-600 text-[#2F2F2F] font-bold py-2 px-4 rounded p-10 mt-8 transition duration-500"
        >
          close
        </button>
      </Modal>

      <div className="min-h-screen flex items-center justify-center relative">
        {(value || showMessage) && (
          <p className="text-lime-500  bg-black p-10 rounded-full">
            Hope you are having a swell day {value}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputMessage;
