import React from 'react';
import ImageGallery from './ImageGallery.js';
import AddToCart from './AddToCart.js';
import ProductSlogan from './ProductSlogan.js';
import ProductInfo from './ProductInfo.js';
import Styles from './Styles.js';
import SocialMedia from './SocialMedia.js';
import { getProductStyles, axios } from '../axios.js';
import './Overview.css';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      selectedStyle: {}
    }
  }

  // '/products/37311/styles'
  // '/products/37311'

  componentDidUpdate(prevProps) {
    if (this.props.curProduct.id !== prevProps.curProduct.id) {
      getProductStyles.call(this, this.props.curProduct.data);
    }
  }

  render() {
    return (
      <div className="overview-container">
        <div className="image-gallery-container">
          <ImageGallery selectedStyle={this.state.selectedStyle} className="image-gallery" />
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