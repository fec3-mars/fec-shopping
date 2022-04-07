import React from 'react';
import './ImageGallery.css';
import ImageThumbnail from './ImageThumbnail.jsx';
import Arrow from './Arrow.jsx';
import NoImage from '../noImageWarning/NoImage.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      styleImages: [],
      thumbnailStart: 0,
      thumbnailEnd: 6,
      mainImageIdx: 0,
    };
    this.scrollThumbnails = this.scrollThumbnails.bind(this);
    this.scrollMainImages = this.scrollMainImages.bind(this);
    this.updateMainImageHandler = this.updateMainImageHandler.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedStyle } = this.props;
    if (prevProps.selectedStyle.style_id !== selectedStyle.style_id) {
      const photos = [...selectedStyle.photos, ...selectedStyle.photos];
      this.setState({
        // styleImages: this.props.selectedStyle.photos,
        styleImages: photos,
        mainImageIdx: 0,
        thumbnailStart: 0,
        thumbnailEnd: 6,
        expanded: false,
      });
    }
  }

  updateMainImageHandler(imageIdx) {
    this.setState({
      mainImageIdx: imageIdx,
    });
  }

  scrollMainImages(direction) {
    const { mainImageIdx, thumbnailEnd, thumbnailStart } = this.state;
    if ((mainImageIdx === thumbnailEnd && direction === 1)
      || (mainImageIdx === thumbnailStart && direction === -1)) {
      this.setState({
        mainImageIdx: mainImageIdx + direction,
        thumbnailStart: thumbnailStart + direction,
        thumbnailEnd: thumbnailEnd + direction,
      });
    } else {
      this.setState({
        mainImageIdx: mainImageIdx + direction,
      });
    }
  }

  scrollThumbnails(direction) {
    const { thumbnailStart, thumbnailEnd } = this.state;
    this.setState({
      thumbnailStart: thumbnailStart + direction,
      thumbnailEnd: thumbnailEnd + direction,
    });
  }

  renderImages() {
    const {
      styleImages,
      thumbnailStart,
      thumbnailEnd,
      mainImageIdx,
    } = this.state;

    const byImageInInterval = (idx) => {
      if (styleImages.length > 7) { // identifies if there is a need to have scrolling
        if (thumbnailStart <= idx && thumbnailEnd >= idx) {
          return true;
        }
      } else {
        return true;
      }
      return false;
    };
    return (
      <>
        <img src={`${styleImages[mainImageIdx]?.url}`} alt="" className="main-img" />
        <div className="thumbnail-list-container">
          {thumbnailStart > 0 && <Arrow type="up" scrollThumbnails={this.scrollThumbnails} />}
          <ul className="thumbnail-list">
            {styleImages
              .filter((_, idx) => byImageInInterval(idx))
              .map((img, idx) => (
                <ImageThumbnail
                  key={idx}
                  isMain={mainImageIdx === idx}
                  idx={idx}
                  updateMainImageHandler={
                    this.updateMainImageHandler
                  }
                  thumbnail={img.thumbnail_url}
                />
              ))}
          </ul>
          {thumbnailEnd < styleImages.length - 1 && <Arrow type="down" scrollThumbnails={this.scrollThumbnails} />}
        </div>
        {mainImageIdx > 0 && <Arrow type="left" scrollMainImages={this.scrollMainImages} />}
        {styleImages.length - 1 > mainImageIdx && <Arrow type="right" scrollMainImages={this.scrollMainImages} />}
      </>
    );
  }

  render() {
    // should come from props, not state
    const {
      styleImages,
    } = this.state;
    const { loaded } = this.props;
    return (
      <div className="container image-gallery">
        {styleImages[0]?.url
          ? this.renderImages()
          : <NoImage big={1} message={loaded ? 'Sorry, but there are no images available for this product.' : 'Loading...'} />}
      </div>
    );
  }
}

export default ImageGallery;
