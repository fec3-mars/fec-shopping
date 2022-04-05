import React from 'react';
import ImageGallery from './ImageGallery.js';
import AddToCart from './AddToCart.js';
import ProductSlogan from './ProductSlogan.js';
import ProductInfo from './ProductInfo.js';
import Styles from './Styles.js';
import SocialMedia from './SocialMedia.js';
import Feature from './Feature.js';
import { getProductStyles, axios } from '../axios.js';
import './Overview.css';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      styles: [],
      selectedStyle: {}
    }
    this.styleChangeHandler = this.styleChangeHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.curProduct.data?.id !== prevProps.curProduct.data?.id) {
      getProductStyles.call(this, this.props.curProduct.data);
    }
  }

  styleChangeHandler(style) {
    this.setState({
      selectedStyle: style
    })
  }
  // componentDidMount(prevProps) {
  //   getProductStyles.call(this, this.props.curProduct.data);
  // }

  render() {
    return (
      <div className="overview-container">
        <div className="image-gallery-container">
          <ImageGallery selectedStyle={this.state.selectedStyle} className="image-gallery" />
        </div>
        <div className=" preferences-container">
          <ProductInfo selectedStyle={this.state.selectedStyle} product={this.state.product} className="product-info" />
          <Styles styles={this.state.styles} selectedStyle={this.state.selectedStyle} styleChangeHandler={this.styleChangeHandler} />
          {this.state.selectedStyle.skus && <AddToCart className="add-to-cart" selectedStyle={this.state.selectedStyle} />}
        </div>
        {this.state.product.slogan && <div className="product-slogan-container">
          <ProductSlogan product={this.state.product} className="product-slogan" />
        </div>}
        {this.state.product.features && <ul className="features-list">
          {this.state.product.features.map((item, idx) => {
            if (item.feature !== null && item.value !== null) {
              return <Feature key={idx} item={item} />
            }
          })}
        </ul>}
        <div className="social-media-container">
          <SocialMedia className="social-media" />
        </div>
      </div>
    )
  }
}

export default Overview;