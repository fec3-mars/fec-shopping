import React from 'react';
import './Arrow.css';
import {
  faArrowLeft,
  faArrowRight,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Arrow({
  type,
  scrollThumbnails,
  scrollMainImages,
  modal,
}) {
  return (
    <>
      {type === 'up'
        && (
          <FontAwesomeIcon
            icon={faChevronUp}
            inverse
            onClick={(e) => scrollThumbnails(e, -1)}
            className="btn__pan-up btn__icon"
          />
        )
      }
      {type === 'down'
        && (
          <FontAwesomeIcon
            icon={faChevronDown}
            inverse
            onClick={(e) => scrollThumbnails(e, 1)}
            className="btn__pan-down btn__icon"
          />
        )
      }
      {type === 'right'
        && (
          <FontAwesomeIcon
            icon={faArrowRight}
            inverse
            onClick={(e) => scrollMainImages(e, 1)}
            className={modal === 'yes' ? 'btn__arrow-right-modal btn__icon' : 'btn__arrow-right btn__icon'}
          />
        )
      }
      {type === 'left'
        && (
          <FontAwesomeIcon
            icon={faArrowLeft}
            inverse
            onClick={(e) => scrollMainImages(e, -1)}
            className={modal === 'yes' ? 'btn__arrow-left-modal btn__icon' : 'btn__arrow-left btn__icon'}
          />
        )}
    </>
  );
}

export default Arrow;
