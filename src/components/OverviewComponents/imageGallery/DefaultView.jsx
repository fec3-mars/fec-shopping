import React from 'react';
import Arrow from './Arrow.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';

function DefaultView({
  parentState,
  styleImages,
  updateMainImageHandler,
  scrollThumbnails,
  scrollMainImages,
  toggleExpanded,
}) {
  const {
    thumbnailStart,
    thumbnailEnd,
    mainImageIdx,
  } = parentState;

  return (
    (
      <>
        <img onClick={(e) => { toggleExpanded(e) }} src={`${styleImages[mainImageIdx]?.url}`} alt="selected image" className="main-img" />
        <div className="thumbnail-list-container">
          {thumbnailStart > 0 && <Arrow type="up" scrollThumbnails={scrollThumbnails} />}
          <ul className="thumbnail-list">
            {styleImages
              .map((img, idx) => (
                thumbnailStart <= idx
                && thumbnailEnd >= idx
                && (
                  <ImageThumbnail
                    key={idx}
                    isMain={mainImageIdx === idx}
                    idx={idx}
                    updateMainImageHandler={
                      updateMainImageHandler
                    }
                    thumbnail={img.thumbnail_url}
                  />
                )
              ))}
          </ul>
          {thumbnailEnd < styleImages.length - 1 && <Arrow type="down" scrollThumbnails={scrollThumbnails} />}
        </div>
        {mainImageIdx > 0 && <Arrow type="left" scrollMainImages={scrollMainImages} />}
        {styleImages.length - 1 > mainImageIdx && <Arrow type="right" scrollMainImages={scrollMainImages} />}
      </>
    )
  );
}

export default DefaultView;
