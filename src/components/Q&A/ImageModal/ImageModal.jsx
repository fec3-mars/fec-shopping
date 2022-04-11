import './ImageModal.scss';
import React from 'react';
import {
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "img-modal qa-img-display-block" : "img-modal qa-img-display-none";

  return (
    <div className={showHideClassName}>
      <section className="qa-img-modal-main">
        {children}
        <FontAwesomeIcon icon={faCircleXmark} onClick={handleClose} className="btn__close-modal" />
      </section>
    </div>
  );
};

export default ImageModal;
