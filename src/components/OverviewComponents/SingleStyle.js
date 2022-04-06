import React from 'react';
import './SingleStyle.css';
import NoImage from './NoImage.js';
import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleStyle = ({ style, selectedStyle, styleChangeHandler }) => {

  console.log(style.photos[0], selectedStyle)

  const nameClass = selectedStyle ? 'style-container relative' : 'style-container';
  return (
    <div className={nameClass} onClick={() => { styleChangeHandler(style) }}>
      {(style.photos[0].url && <img src={style.photos[0].url} className="style-img" />) || <NoImage message={'no image'} selectedStyle={selectedStyle} />}
      {(selectedStyle && style.photos[0].url) && <FontAwesomeIcon icon={faCircleCheck} className="checkmark" />}

    </div>
  )

}

export default SingleStyle;