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
    this.keyPressHandler = this.keyPressHandler.bind(this);
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

  keyPressHandler(e) {
    console.log(e);
    // if ()
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
      <div className="main-image-modal" data-testid="main-image-modal" >
        <div className="modal-relative-positioning">
          <div className="relative-positioning">
            {!this.state.zoomedIn && mainImageIdx > 0 && <Arrow type="left" scrollMainImages={scrollMainImages} modal="yes" />}
            <div tabIndex={0} role="button" onKeyDown={(e) => this.keyPressHandler(e)} onClick={(e) => this.toggleZoom(e)} className="main-image-container">
              <InnerImageZoom
                src={`${styleImages[mainImageIdx]?.url}`}
                zoomScale={1.5}
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
                keyPressHandler={this.keyPressHandler}
                mainImageIdx={mainImageIdx}
                updateMainImageHandler={updateMainImageHandler}
              />
            ))}
          </div>
          <FontAwesomeIcon icon={faCircleXmark} onClick={toggleExpanded} className="btn__close-modal" data-testid="btn__close-modal" />
        </div>
      </div >
    );
  }
}

export default ZoomModal;
