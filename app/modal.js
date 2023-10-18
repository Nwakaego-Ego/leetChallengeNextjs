const Modal = (prop) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <div>
        <Modal
          isOpen={prop.isModalOpen}
          onAfterOpen={prop.modalClose}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <p>Enter your name</p>
          <input type="text" required="required" />
          <button
            onClick={closeModal}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10"
          >
            close
          </button>
        </Modal>
      </div>
    </>
  );
};
