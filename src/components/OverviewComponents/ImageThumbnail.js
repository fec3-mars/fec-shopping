import React from 'react';
import './ImageThumbnail.css'

const ImageThumbnail = ({ updateMainImageHandler, idx, main, thumbnail }) => {
  let className = main ? 'img-thumbnail-container selected' : 'img-thumbnail-container';
  return (
    <div onClick={() => { updateMainImageHandler(idx) }} className={className}>
      <img className="img-thumbnail" src={thumbnail} />
    </div>
  )

}

export default ImageThumbnail