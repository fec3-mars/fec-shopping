import React from 'react';
import './Arrow.css';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faChevronCircleUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Arrow = ({ type, scrollThumbnails, scrollMainImages }) => {
  return (
    <>
      {type === 'up' && <FontAwesomeIcon icon={faChevronCircleUp} color="black" size="2x" onClick={() => { scrollThumbnails(-1) }} className="btn__pan-up"></FontAwesomeIcon>}
      {type === 'down' && <FontAwesomeIcon icon={faChevronCircleDown} color="black" size="2x" onClick={() => { scrollThumbnails(1) }} className="btn__pan-down"></FontAwesomeIcon>}
      {type === 'right' && <FontAwesomeIcon icon={faArrowCircleRight} color="black" size="2x" onClick={() => { scrollMainImages(1) }} className="btn__arrow-right"></FontAwesomeIcon>}
      {type === 'left' && <FontAwesomeIcon icon={faArrowCircleLeft} color="black" size="2x" onClick={() => { scrollMainImages(-1) }} className="btn__arrow-left"></FontAwesomeIcon>}
    </>
  )
}

export default Arrow;
