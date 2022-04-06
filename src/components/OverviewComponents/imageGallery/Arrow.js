import React from 'react';
import './Arrow.css';
import {
  faArrowLeft,
  faArrowRight,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Arrow = ({ type, scrollThumbnails, scrollMainImages }) => {
  return (
    <>
      {type === 'up' &&
        <FontAwesomeIcon
          icon={faChevronUp}
          inverse={true}
          onClick={() => { scrollThumbnails(-1) }}
          className="btn__pan-up btn__icon" />
      }
      {type === 'down' &&
        <FontAwesomeIcon
          icon={faChevronDown}
          inverse={true}
          onClick={() => { scrollThumbnails(1) }}
          className="btn__pan-down btn__icon" />
      }
      {type === 'right' &&
        <FontAwesomeIcon
          icon={faArrowRight}
          inverse={true}
          onClick={() => { scrollMainImages(1) }}
          className="btn__arrow-right btn__icon" />
      }
      {type === 'left' &&
        <FontAwesomeIcon
          icon={faArrowLeft}
          inverse={true}
          onClick={() => { scrollMainImages(-1) }}
          className="btn__arrow-left btn__icon" />}
    </>
  )
}

export default Arrow;
