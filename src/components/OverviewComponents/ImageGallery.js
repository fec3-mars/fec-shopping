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
      mainImageIdx: 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedStyle.style_id !== this.props.selectedStyle.style_id) {
      this.setState({
        styleImages: this.props.selectedStyle.photos,
        mainImageIdx: 0,
        expanded: false
      })
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   debugger;
  //   if (props.selectedStyle !== state.selectedStyle) {
  //     return {
  //       styleImages: this.props.selectedStyle.photos,
  //       mainImageIdx: 0,
  //       expanded: false
  //     }`
  //   }
  //   // if (props.name !== state.name) {
  //   //   //Change in props
  //   //   return {
  //   //     name: props.name
  //   //   };
  //   // }
  //   return null; // No change to state
  // }

  render() {
    console.log(this.state)

    return (
      <div style={{ backgroundImage: `url('${this.state.styleImages[this.state.mainImageIdx]?.url}')` }} className="container image-gallery">
        <div className="thumbnail-list-container">
          <ul className="thumbnail-list">
            {this.state.styleImages.map((img, idx) => {
              return <ImageThumbnail idx={this.state.mainImageIdx === idx} thumbnail={img.thumbnail_url} />
            })
            }
          </ul>
        </div>
      </div >
    )
  }
}

export default ImageGallery;