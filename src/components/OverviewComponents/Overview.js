import React from 'react';
import ImageGallery from './ImageGallery.js';
import AddToCart from './AddToCart.js';
import ProductSlogan from './ProductSlogan.js';
import ProductInfo from './ProductInfo.js';
import Styles from './Styles.js';
import SocialMedia from './SocialMedia.js';
import './Overview.css';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProduct: {},
      curStyles: [],
      curSelectedStyle: {}
    }
  }

  // '/products/37311/styles'
  // '/products/37311'

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
      <div className="overview-container">
        <div className="image-gallery-container">
          <ImageGallery className="image-gallery" />
        </div>
        <div className=" preferences-container">
          <ProductInfo className="product-info" />
          <Styles className="styles" />
          <AddToCart className="add-to-cart" />
        </div>
        <div className="product-slogan-container">
          <ProductSlogan className="product-slogan" />
        </div>
        <div className="social-media-container">
          <SocialMedia className="social-media" />
        </div>
      </div>
    )
  }
}

export default Overview;