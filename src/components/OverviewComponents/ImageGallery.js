import React from 'react';
import "./ImageGallery.css"

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

  componentDidUpdate(prevProps) {
    if (prevProps.selectedStyle.style_id !== this.props.selectedStyle.style_id) {
      this.setState({
        styleImages: this.props.selectedStyle.photos,
        mainImageIdx: 0,
        expanded: false
      })
    }
  }

  render() {
    // let backgroundStyling = {
    //   backgroundImage: `url(${this.state.styleImages[this.state.mainImageIdx]})`,
    //   backgroundRepeat: 'no-repeat',
    // }
    return (
      <div className="container image-gallery" >

        <h1>Image Gallery!</h1>
      </div>
    )
  }
}

export default ImageGallery;