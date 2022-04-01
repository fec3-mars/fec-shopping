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

  //componentReceiveProps(prevProps, newProps){}

  componentDidMount() {

    // fetch curStyles

    this.setState({
      styleImages: this.props.curStyles
    })
  }

  render() {
    console.log(this.props.curStyles)
    let backgroundStyling = {
      backgroundImage: `url(${this.state.styleImages[this.state.mainImageIdx]})`,
      backgroundRepeat: 'no-repeat',
    }
    return (
      <div className="container image-gallery" >
        {console.log(this.state)}
        <h1>Image Gallery!</h1>
      </div>
    )
  }
}

export default ImageGallery;