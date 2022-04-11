import React from 'react';
import { faBan, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NoImage.css';

function NoImage({
  message,
  selectedStyle,
  big,
}) {
  const nameClassIcon = big === 1 ? 'missing-image-icon big' : 'missing-image-icon';
  const nameClassMessage = big === 1 ? 'missing-image-message big' : 'missing-image-message';
  const nameClassContainer = big === 1 ? 'missing-image-container big' : 'missing-image-container';

  return (
    <div className={nameClassContainer}>
      <p className={nameClassMessage}>{message}</p>
      {!big && <FontAwesomeIcon icon={faBan} className={nameClassIcon} />}
      {selectedStyle && <FontAwesomeIcon icon={faCircleCheck} className="style-selector" />}
    </div>
  );
};

export default NoImage;
