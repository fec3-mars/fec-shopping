import React from 'react';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faPinterestSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SocialMedia.css';

const SocialMedia = () => {

  return (
    <div className="container social-media-container">
      <FontAwesomeIcon icon={faTwitterSquare} color="black" size="4x" className="btn__twitter"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFacebookSquare} color="black" size="4x" className="btn__facebook"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faInstagramSquare} color="black" size="4x" className="btn__instagram"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faPinterestSquare} color="black" size="4x" className="btn__pinterest"></FontAwesomeIcon>
    </div>
  )
}

export default SocialMedia;
