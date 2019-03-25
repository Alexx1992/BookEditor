import React from "react";
import Modal from "react-modal";
import "./Modal.css";

import backIcon from "./img/back.svg";

const ModalWindow = (props) => {
  const { isOpen, children, toggleModal } = props;
  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      closeTimeoutMS={1}
      style={{ overlay: { zIndex: 1000 } }}
      contentLabel="Achieve Del"
      ariaHideApp={false}
    >
      <div className="modalContainer">
        <button className="buttonWrapper">
          <img
            src={backIcon}
            alt="Вернуься назад"
            onClick={toggleModal}
            className="goBack"
          />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWindow;
