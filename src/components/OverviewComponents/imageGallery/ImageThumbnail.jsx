import React from 'react';
import './ImageThumbnail.css';

function ImageThumbnail({
  updateMainImageHandler,
  idx,
  isMain,
  thumbnail,
}) {
  const className = isMain ? 'img-thumbnail-container selected' : 'img-thumbnail-container';
  return (
    <div onClick={() => { updateMainImageHandler(idx) }} className={className}>
      <img className="img-thumbnail" alt="" src={thumbnail} />
    </div>
  );
}

export default ImageThumbnail;
