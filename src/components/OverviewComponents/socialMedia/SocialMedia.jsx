import React from 'react';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMedia.css';

function SocialMedia({ productName }) {

  return (
    <div className="container social-media-container">
      <FontAwesomeIcon
        icon={faTwitterSquare}
        className="btn__twitter"
        onClick={(e) => {
          window.open(`https://twitter.com/intent/tweet?text=${productName}&url=${document.location.href}`, '_blank');
        }}
      />
      <FontAwesomeIcon
        icon={faFacebookSquare}
        className="btn__facebook"
        onClick={(e) => {
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${document.location.href}`, '_blank');
        }}

      />
      <FontAwesomeIcon
        icon={faPinterestSquare}
        className="btn__pinterest"
        onClick={(e) => {
          window.open(`https://www.pinterest.com/pin/create/button/?url=${document.location.href}&media=&description=${productName}`, '_blank');
        }}
      />
    </div>
  );
}

export default SocialMedia;
