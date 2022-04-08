import './modal.css';
import React from 'react';

const Modal = ({ handleClose, show, children, curProduct, curCard }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  // console.log('curproduct at modal', curProduct);
  // console.log('curCard at modal', curCard);
  return (

    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        {curProduct.data.category}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;