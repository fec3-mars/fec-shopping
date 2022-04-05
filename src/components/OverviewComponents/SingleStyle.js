import React from 'react';
import './SingleStyle.css';
import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleStyle = ({ style, selectedStyle, styleChangeHandler }) => {

  const nameClass = selectedStyle ? 'style-container relative' : 'style-container';
  return (
    <div className={nameClass} onClick={() => { styleChangeHandler(style) }}>
      <img src={style.photos[0].url} className="style-img" />
      {selectedStyle && <FontAwesomeIcon icon={faCircleCheck} className="checkmark" />}

    </div>
  )

}

export default SingleStyle;