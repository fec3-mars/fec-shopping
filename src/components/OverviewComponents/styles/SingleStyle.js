import React from 'react';
import './SingleStyle.css';
import NoImage from './NoImage.js';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleStyle = ({ style, selectedStyle, styleChangeHandler }) => {
  const isNull = style.photos[0].url;
  const nameClass = selectedStyle ? 'style-container relative' : 'style-container';

  return (
    <div className={nameClass} onClick={() => { styleChangeHandler(style) }}>
      {(isNull && <img src={isNull} className="style-img" />) || <NoImage message={'no image'} selectedStyle={selectedStyle} />}
      {(selectedStyle && isNull) && <FontAwesomeIcon icon={faCircleCheck} className="checkmark" />}

    </div>
  )

}

export default SingleStyle;
