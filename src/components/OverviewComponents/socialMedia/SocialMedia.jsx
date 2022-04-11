import React from 'react';
// import { useNavigate } from "react-router-dom";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMedia.css';

function SocialMedia(media) {
  // let navigate = useNavigate();
  // const routeChange = () => {
  //   if (media === "facebook") {
  //     let path = 'https://www.facebook.com/sharer/sharer.php?u=#url';
  //   }
  //   navigate(path);
  // }
  return (
    <div className="container social-media-container">
      <FontAwesomeIcon
        icon={faTwitterSquare}
        color="black"
        size="4x"
        className="btn__twitter"
      // onClick={() => { routeChange('twitter') }}
      />
      <FontAwesomeIcon
        icon={faFacebookSquare}
        color="black"
        size="4x"
        className="btn__facebook"
      // onClick={() => { routeChange('facebook') }}
      />
      <FontAwesomeIcon
        icon={faInstagramSquare}
        color="black"
        size="4x"
        className="btn__instagram"
      // onClick={() => { routeChange('instagram') }}
      />
      <FontAwesomeIcon
        icon={faPinterestSquare}
        color="black"
        size="4x"
        className="btn__pinterest"
      // onClick={() => { routeChange('pinterest') }}
      />
    </div>
  );
}

export default SocialMedia;
