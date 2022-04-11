import React from 'react';
import './SingleStyle.css';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NoImage from '../noImageWarning/NoImage.jsx';

function SingleStyle({
  style,
  selectedStyle,
  styleChangeHandler,
}) {
  const isNull = style.photos[0].url;
  const nameClass = selectedStyle ? 'style-container relative' : 'style-container';

  return (
    <div className={nameClass} onClick={() => { styleChangeHandler(style) }}>
      {(isNull && <img src={isNull} alt="" className="style-img" />) || <NoImage message="no image" selectedStyle={selectedStyle} />}
      {(selectedStyle && isNull) && <FontAwesomeIcon icon={faCircleCheck} className="checkmark" />}

    </div>
  );
}

export default SingleStyle;
