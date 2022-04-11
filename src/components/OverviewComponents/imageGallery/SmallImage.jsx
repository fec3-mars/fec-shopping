import React from 'react';
import './SmallImage.css';

function SmallImage({
  img,
  idx,
  mainImageIdx,
  updateMainImageHandler,
}) {
  const nameClass = idx === mainImageIdx ? 'small-image current' : 'small-image';
  return (
    <div className="small-image-div">
      <img className={nameClass} onClick={(e) => { updateMainImageHandler(e, idx) }} src={`${img.url}`} alt="" />
    </div>
  );
}

export default SmallImage;
