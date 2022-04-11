import React from 'react';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMedia.css';

function SocialMedia() {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${window.location.href}`;
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${window.location.href}`;

  return (
    <div className="container social-media-container">
      <FontAwesomeIcon
        icon={faTwitterSquare}
        color="black"
        size="4x"
        className="btn__twitter"
        href={twitterShareUrl}
      />
      <FontAwesomeIcon
        icon={faFacebookSquare}
        color="black"
        size="4x"
        className="btn__facebook"
        href={facebookShareUrl}
      />
      <FontAwesomeIcon
        icon={faInstagramSquare}
        color="black"
        size="4x"
        className="btn__instagram"
      />
      <FontAwesomeIcon
        icon={faPinterestSquare}
        color="black"
        size="4x"
        className="btn__pinterest"
        href={pinterestShareUrl}
      />
    </div>
  );
}

export default SocialMedia;
