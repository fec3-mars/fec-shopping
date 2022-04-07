import React from 'react';
import ImageGallery from './imageGallery/ImageGallery.jsx';
import AddToCart from './addToCart/AddToCart.jsx';
import ProductSlogan from './productInfo/ProductSlogan.jsx';
import ProductInfo from './productInfo/ProductInfo.jsx';
import Styles from './styles/Styles.jsx';
import SocialMedia from './socialMedia/SocialMedia.jsx';
import Feature from './productInfo/Feature.jsx';
import { getProductStyles } from '../axios';
import './Overview.css';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      styles: [],
      selectedStyle: {},
    };
    this.styleChangeHandler = this.styleChangeHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { curProduct } = this.props;
    const { curProduct: prevCurProduct } = prevProps;
    if (curProduct.data?.id !== prevCurProduct.data?.id) {
      getProductStyles.call(this, curProduct.data);
    }
  }

  styleChangeHandler(style) {
    this.setState({
      selectedStyle: style,
    });
  }
  // componentDidMount(prevProps) {
  //   getProductStyles.call(this, this.props.curProduct.data);
  // }

  render() {
    const { product, styles, selectedStyle } = this.state;

    return (
      <div className="overview-container">
        <div className="image-gallery-container">
          <ImageGallery selectedStyle={selectedStyle} className="image-gallery" />
        </div>
        <div className=" preferences-container">
          <ProductInfo selectedStyle={selectedStyle} product={product} className="product-info" />
          <Styles
            styles={styles}
            selectedStyle={selectedStyle}
            styleChangeHandler={this.styleChangeHandler}
          />
          {selectedStyle.skus && <AddToCart className="add-to-cart" selectedStyle={selectedStyle} />}
        </div>
        {product.slogan && (
          <div className="product-slogan-container">
            <ProductSlogan product={product} className="product-slogan" />
          </div>
        )}
        {product.features && (
          <ul className="features-list">
            {product.features.map((item) => {
              if (item.feature !== null && item.value !== null) {
                return <Feature key={item.feature} item={item} />;
              }
            })}
          </ul>
        )}
        <div className="social-media-container">
          <SocialMedia className="social-media" />
        </div>
      </div>
    )
  }
}

export default Overview;
