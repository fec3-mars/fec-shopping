import React from 'react';
import { faBan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NoImage.css';

const NoImage = ({ message, selectedStyle }) => {

  return (
    <div className="no-image-container">
      <p className="no-image-message">{message}</p>
      <FontAwesomeIcon icon={faBan} className="missing-image-icon" />
      {selectedStyle && <FontAwesomeIcon icon={faCircleCheck} className="style-selector" />}
    </div>
  )
}

export default NoImage;
