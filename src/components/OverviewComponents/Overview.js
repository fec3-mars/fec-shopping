import React from 'react';
import ImageGallery from './ImageGallery.js';
import AddToCart from './AddToCart.js';
import ProductSlogan from './ProductSlogan.js';
import ProductInfo from './ProductInfo.js';
import Styles from './Styles.js';
import SocialMedia from './SocialMedia.js';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProduct: {},
      curStyles: [],
      curSelectedStyle: {}
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
      <div className="container overview">
        <div className="container variable" >
          <ImageGallery className="image-gallery" />
          <div className="container preferences">
            <ProductInfo />
            <Styles />
            <AddToCart />
          </div>
        </div>
        <ProductSlogan />
        <SocialMedia />
      </div>
    )
  }
}

export default Overview;