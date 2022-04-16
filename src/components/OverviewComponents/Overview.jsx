import React, { lazy } from "react";
// import ImageGallery from "./imageGallery/ImageGallery.jsx";
// import AddToCart from "./addToCart/AddToCart.jsx";
// import ProductSlogan from "./productInfo/ProductSlogan.jsx";
// import ProductInfo from "./productInfo/ProductInfo.jsx";
// import Styles from "./styles/Styles.jsx";
// import SocialMedia from "./socialMedia/SocialMedia.jsx";
// import Feature from "./productInfo/Feature.jsx";
import { getProductStyles, postInteraction } from "../axios";
import "./Overview.css";


const ImageGallery = lazy(() => import('./imageGallery/ImageGallery.jsx'));
const AddToCart = lazy(() => import('./addToCart/AddToCart.jsx'));
const ProductSlogan = lazy(() => import('./productInfo/ProductSlogan.jsx'));
const ProductInfo = lazy(() => import('./productInfo/ProductInfo.jsx'));
const Styles = lazy(() => import('./styles/Styles.jsx'));
const SocialMedia = lazy(() => import('./socialMedia/SocialMedia.jsx'));
const Feature = lazy(() => import('./productInfo/Feature.jsx'));

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      styles: [],
      selectedStyle: {},
      loaded: false,
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

  styleChangeHandler(e, style) {
    this.setState({
      selectedStyle: style,
    });
  }

  render() {
    const {
      product,
      styles,
      selectedStyle,
      loaded,
    } = this.state;

    return (
      <div onClick={(e) => { postInteraction(e, 'Overview') }}>
        <div className="overview-container">
          <div className="image-gallery-container">
            <ImageGallery loaded={loaded} productId={product.id} selectedStyle={selectedStyle} className="image-gallery" />
          </div>
          <div className=" preferences-container">
            <ProductInfo
              selectedStyle={selectedStyle}
              product={product}
              className="product-info"
              reviewsInfo={this.props}
            />
            <Styles
              styles={styles}
              selectedStyle={selectedStyle}
              styleChangeHandler={this.styleChangeHandler}
            />
            {selectedStyle.skus && (
              <AddToCart className="add-to-cart" selectedStyle={selectedStyle} />
            )}
          </div>
          {product.slogan && (
            <div className="product-slogan-container">
              <ProductSlogan product={product} className="product-slogan" />
            </div>
          )}
          {product.features && (
            <ul className="features-list">
              {product.features
                .filter((item) => item.feature !== null && item.value !== null)
                .map((item) => (
                  <Feature key={item.feature} item={item} />
                ))}
            </ul>
          )}
          <div className="social-media-container">
            <SocialMedia productName={product.name} className="social-media" />
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
