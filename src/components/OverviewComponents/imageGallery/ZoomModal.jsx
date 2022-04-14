import React from 'react';
import {
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ZoomModal.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import Arrow from './Arrow.jsx';
import SmallImage from './SmallImage.jsx';

class ZoomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomedIn: false,
      // imageWidth: 300,
    };

    this.toggleZoom = this.toggleZoom.bind(this);
    this.toggleZoomMouseOut = this.toggleZoomMouseOut.bind(this);
  }

  toggleZoom(e) {
    // const { offsetWidth, offsetHeight } = e.target;
    // const newWidth = offsetWidth / offsetHeight * window.innerHeight;
    const { zoomedIn } = this.state;
    this.setState({
      zoomedIn: !zoomedIn,
      // imageWidth: !zoomedIn ? newWidth : 300,
    });
  }

  toggleZoomMouseOut() {
    this.setState({
      zoomedIn: false,
      // imageWidth: 300,
    });
  }

  render() {
    const {
      styleImages,
      mainImageIdx,
      scrollMainImages,
      toggleExpanded,
      updateMainImageHandler,
    } = this.props;
    return (
      <div className="main-image-modal" role="main-image-modal" >
        <div className="modal-relative-positioning">
          <div className="relative-positioning">
            {!this.state.zoomedIn && mainImageIdx > 0 && <Arrow type="left" scrollMainImages={scrollMainImages} modal="yes" />}
            <div onClick={e => this.toggleZoom(e)} className="main-image-container">
              <InnerImageZoom
                src={`${styleImages[mainImageIdx]?.url}`}
                zoomScale={2.5}
                width={300}
                // width={this.state.imageWidth}
                imgAttributes={{ alt: "zoomed image" }}
                hideHint
                className="image-zoom"
                afterZoomOut={this.toggleZoomMouseOut}
              />
            </div>
            {!this.state.zoomedIn && styleImages.length - 1 > mainImageIdx && <Arrow type="right" scrollMainImages={scrollMainImages} modal="yes" />}
          </div>
          <div className="small-images-container" role="modal">
            {!this.state.zoomedIn && styleImages.map((img, idx) => (
              <SmallImage
                key={img.url}
                img={img}
                idx={idx}
                mainImageIdx={mainImageIdx}
                updateMainImageHandler={updateMainImageHandler}
              />
            ))}
          </div>
          <FontAwesomeIcon icon={faCircleXmark} onClick={toggleExpanded} className="btn__close-modal" alt="close btn" />
        </div>
      </div >
    );
  }
}

export default ZoomModal;
