import React from 'react';
import "./ImageGallery.css"
import ImageThumbnail from "./ImageThumbnail.js"
import Arrow from './Arrow.js';
import NoImage from '../styles/NoImage.js';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faChevronCircleUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      styleImages: [],
      thumbnailStart: 0,
      thumbnailEnd: 6,
      mainImageIdx: 0
    }
    this.scrollThumbnails = this.scrollThumbnails.bind(this);
    this.scrollMainImages = this.scrollMainImages.bind(this);
    this.updateMainImageHandler = this.updateMainImageHandler.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedStyle.style_id !== this.props.selectedStyle.style_id) {
      const photos = [...this.props.selectedStyle.photos, ...this.props.selectedStyle.photos];
      this.setState({
        // styleImages: this.props.selectedStyle.photos,
        styleImages: photos,
        mainImageIdx: 0,
        thumbnailStart: 0,
        thumbnailEnd: 6,
        expanded: false
      })
    }
  }

  updateMainImageHandler(imageIdx) {
    this.setState({
      mainImageIdx: imageIdx
    })

  }

  scrollMainImages(direction) {
    if ((this.state.mainImageIdx === this.state.thumbnailEnd && direction === 1) || (this.state.mainImageIdx === this.state.thumbnailStart && direction === -1)) {
      this.setState({
        mainImageIdx: this.state.mainImageIdx + direction,
        thumbnailStart: this.state.thumbnailStart + direction,
        thumbnailEnd: this.state.thumbnailEnd + direction
      })
    } else {
      this.setState({
        mainImageIdx: this.state.mainImageIdx + direction
      })
    }
  }

  scrollThumbnails(direction) {
    this.setState({
      thumbnailStart: this.state.thumbnailStart + direction,
      thumbnailEnd: this.state.thumbnailEnd + direction
    })
  }

  render() {
    const { expanded, styleImages, thumbnailStart, thumbnailEnd, mainImageIdx } = this.state;
    return (
      <div className="container image-gallery">
        {(styleImages[0]?.url && <>
          <img src={`${styleImages[mainImageIdx]?.url}`} className="main-img" />
          <div className="thumbnail-list-container">
            {thumbnailStart > 0 && <Arrow type={'up'} scrollThumbnails={this.scrollThumbnails} />}
            <ul className="thumbnail-list">
              {styleImages.map((img, idx) => {
                if (styleImages.length > 7) { // identifies if there is a need to have scrolling
                  if (thumbnailStart <= idx && thumbnailEnd >= idx) { //ensures that if scrolling is needed, the correct pictures are showing
                    return <ImageThumbnail key={idx} updateMainImageHandler={this.updateMainImageHandler} idx={idx} isMain={mainImageIdx === idx} thumbnail={img.thumbnail_url} />
                  }
                } else {
                  return <ImageThumbnail key={idx} isMain={mainImageIdx === idx} idx={idx} updateMainImageHandler={this.updateMainImageHandler} thumbnail={img.thumbnail_url} /> //if scrolling is not needed
                }
              })
              }
            </ul>
            {thumbnailEnd < styleImages.length - 1 && <Arrow type={'down'} scrollThumbnails={this.scrollThumbnails} />}
          </div>
          {mainImageIdx > 0 && <Arrow type={'left'} scrollMainImages={this.scrollMainImages} />}
          {styleImages.length - 1 > mainImageIdx && <Arrow type={'right'} scrollMainImages={this.scrollMainImages} />}
        </>
        ) || <NoImage big={true} message={'Sorry, but there are no images available for this product.'} />}
      </div >
    )
  }
}

export default ImageGallery;
