import React from 'react';
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
    };

    this.toggleZoom = this.toggleZoom.bind(this);
    this.toggleZoomMouseOut = this.toggleZoomMouseOut.bind(this);
  }

  toggleZoom() {
    const { zoomedIn } = this.state;
    this.setState({
      zoomedIn: !zoomedIn,
    });
  }

  toggleZoomMouseOut() {
    this.setState({
      zoomedIn: false,
    });
  }

  render() {
    const {
      styleImages,
      mainImageIdx,
      scrollMainImages,
      updateMainImageHandler,
    } = this.props;
    return (
      <div className="main-image-modal">
        <div className="modal-relative-positioning">

          <div className="relative-positioning">
            {this.state.zoomedIn && mainImageIdx > 0 && <Arrow type="left" scrollMainImages={scrollMainImages} modal="yes" />}
            <div
              onClick={this.toggleZoom}
              onMouseOut={this.toggleZoomMouseOut}
              className="main-image-container"
            >
              <InnerImageZoom
                src={`${styleImages[mainImageIdx]?.url}`}
                zoomScale={2.5}
                width={400}
                height={500}
                hideHint
                className="image-zoom"
              />
            </div>
            {!this.state.zoomedIn && styleImages.length - 1 > mainImageIdx && <Arrow type="right" scrollMainImages={scrollMainImages} modal="yes" />}
          </div>
          <div className="small-images-container">
            {styleImages.map((img, idx) => (
              <SmallImage
                key={idx}
                img={img}
                idx={idx}
                mainImageIdx={mainImageIdx}
                updateMainImageHandler={updateMainImageHandler}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ZoomModal;
