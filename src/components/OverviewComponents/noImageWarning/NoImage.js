import React from 'react';
import { faBan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NoImage.css';

const NoImage = ({ message, selectedStyle, big }) => {
  console.log(big);

  let nameClassIcon = big ? "missing-image-icon big" : "missing-image-icon"
  let nameClassMessage = big ? "missing-image-message big" : "missing-image-message"
  let nameClassContainer = big ? "missing-image-container big" : "missing-image-container"

  return (
    <div className={nameClassContainer}>
      <p className={nameClassMessage}>{message}</p>
      {!big && <FontAwesomeIcon icon={faBan} className={nameClassIcon} />}
      {selectedStyle && <FontAwesomeIcon icon={faCircleCheck} className="style-selector" />}
    </div>
  )
}

export default NoImage;
