import React from 'react';


class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      styleImages: [],
      mainImageIdx: 0
    }
  }

  componentDidMount() {

    // fetch curStyles

    // this.setState({
    //   curProduct: this.props.curProduct,
    //   curStyles: curStyles,
    //   curSelectedStyle: curStyles[0]
    // })
  }

  render() {
    return (
      <div className="container image-gallery">
        <h1>Image Gallery!</h1>
      </div>
    )
  }
}

export default ImageGallery;