import React from 'react';
import "./ImageGallery.css"
import ImageThumbnail from "./ImageThumbnail.js"

// const ImageGallery = ({curStyles}) => {
//   const [expanded, setExapanded] = useState(false)
//   const [styleImagess, setStyleImages] = useState([])
//   const [mainImageIdx, setMainImageIdx] = useState(0)

//   useEffect(() => {
//     setStyleImages(curStyles)
//     setMainImageIdx(0)
//   }, [curStyles])

//   return
// }

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
    this.updateMainImageHandler = this.updateMainImageHandler.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedStyle.style_id !== this.props.selectedStyle.style_id) {
      // const photos = [...this.props.selectedStyle.photos, ...this.props.selectedStyle.photos];
      this.setState({
        styleImages: this.props.selectedStyle.photos,
        // styleImages: photos,
        mainImageIdx: 0,
        thumbnailStart: 0,
        thumbailEnd: 6,
        expanded: false
      })
    }
  }

  updateMainImageHandler(imageIdx) {
    this.setState({
      mainImageIdx: imageIdx
    })

  }

  scrollThumbnails(direction) {
    if (direction === 'up') {
      this.setState({
        thumbnailStart: this.state.thumbnailStart - 1,
        thumbnailEnd: this.state.thumbnailEnd - 1
      })
    } else {
      this.setState({
        thumbnailStart: this.state.thumbnailStart + 1,
        thumbnailEnd: this.state.thumbnailEnd + 1
      })
    }
  }

  render() {
    console.log(this.state)

    return (
      <div style={{ backgroundImage: `url('${this.state.styleImages[this.state.mainImageIdx]?.url}')` }} className="container image-gallery">
        <div className="thumbnail-list-container">
          {this.state.thumbnailStart > 0 && <button onClick={() => { this.scrollThumbnails('up') }} className="btn__pan">{'(up)'}</button>}
          <ul className="thumbnail-list">
            {this.state.styleImages.map((img, idx) => {
              if (this.state.styleImages.length > 7) { // identifies if there is a need to have scrolling
                if (this.state.thumbnailStart <= idx && this.state.thumbnailEnd >= idx) { //ensures that if scrolling is needed, the correct pictures are showing
                  console.log(idx, idx + this.state.thumbnailStart)
                  return <ImageThumbnail key={img.thumbnail_url} updateMainImageHandler={this.updateMainImageHandler} idx={idx} main={this.state.mainImageIdx === idx} thumbnail={img.thumbnail_url} />
                }
              } else {
                return <ImageThumbnail key={img.thumbnail_url} main={this.state.mainImageIdx === idx} idx={idx} updateMainImageHandler={this.updateMainImageHandler} totalIdx={this.state.mainImageIdx === idx} thumbnail={img.thumbnail_url} /> //if scrolling is not needed
              }
            })
            }
          </ul>
          {console.log(this.state.thumbnailStart, this.state.thumbnailEnd, this.state.styleImages.length)}
          {this.state.thumbnailEnd < this.state.styleImages.length - 1 && <button onClick={() => { this.scrollThumbnails('down') }} className="btn__pan">{'(down)'}</button>}
        </div>
      </div >
    )
  }
}

export default ImageGallery;