import './Modal.scss';
import React from 'react';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "qa-modal display-block" : "qa-modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="qa-modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};


export default Modal;
