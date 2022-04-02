import React from 'react';
import './ImageThumbnail.css'

const ImageThumbnail = ({ idx, thumbnail }) => {
  let className = idx ? 'img-thumbnail-container selected' : 'img-thumbnail-container';
  return (
    <div className={className}>
      <img className="img-thumbnail" src={thumbnail} />
    </div>
  )

}

export default ImageThumbnail