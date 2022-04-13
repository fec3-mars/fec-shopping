/* eslint-disable */
import React from 'react';
import App from '../App.js';
import {
  axios, makeRequest, getRelatedProducts, getRelatedDetail, getRelatedImage,
} from '../axios.js';
import IndividualProduct from './IndividualProduct.js';
import './Related.css';
import './Carousal.css';
import Modal from './Modal.js';

import {
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// this RelatedProductsList should stay the same for each currentproduct
// this list should gather all elements/component of related products to be rendered
class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      relatedProductDetail: [2],
      relatedProductImage: {},
      relatedImage: [],
      show: false,
      set: 1,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.scroll = this.scroll.bind(this);
  }

  showModal = (e) => {
    // console.log('e at shgowmodal', e);
    this.setState({
      show: true,
      clickedItem: e,
    });
  };

  hideModal = (e) => {
    // console.log('state at hide', this.state);
    // console.log('e at hidemodal', e);
    this.setState({
      show: false,
      clickedItem: this.state.clickedItem,
    });
  };

  shiftRelatedPhotos = (shift) => {
    const { set } = this.state;
    this.setState({
      set: set + shift,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.curProduct.data?.id !== prevProps.curProduct.data?.id) {
      getRelatedProducts.call(this, this.props.curProduct.data.id);
    }
    if (this.state.relatedProducts !== prevState.relatedProducts) {
      getRelatedDetail.call(this, this.state.relatedProducts);
    }
    if (this.state.relatedProducts !== prevState.relatedProducts) {
      getRelatedImage.call(this, this.state.relatedProducts);
    }
  }

  render() {
    const { set } = this.state;
    // console.log('state to be rendered', this.state)
    if (this.state.relatedProductDetail.length === this.state.relatedProducts.length && this.state.relatedProductImage.length === this.state.relatedProducts.length) {
      // console.log('state to be rendered', this.state)
      const a3 = this.state.relatedProductDetail.map(t1 => ({ ...t1, ...this.state.relatedImage.find(t2 => t2.id === t1.data.id) }))
      var details = this.state.relatedProductDetail;

      const prevArrowClass = (set * 4 - 4 > 0) ? "arrow-prev__btn" : "arrow-prev__btn hidden"
      const nextArrowClass = (4 * (set + 1) - 4) < a3.length ? "arrow-next__btn" : "arrow-next__btn hidden"
      // console.log('here is detail', a3);


      return (
        <div className="productContainer">
          <h1>RELATED PRODUCTS</h1>
          <div className="relatedCard">

            {a3.slice((set * 4 - 4), (4 * (set + 1) - 4)).map((element, index) =>
            (
              <div key={index} element={element} id={element.data.id} className="individualCard">
                <IndividualProduct
                  curCard={element}
                  // curPic={this.state.relatedProductImage[index]}
                  curThumb={this.state.relatedImage}
                  handleChang={this.props.handleChange}
                  curProduct={this.props.curProduct}
                />
              </div>
            ))}
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={() => this.shiftRelatedPhotos(-1)}
              className={prevArrowClass}
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={() => this.shiftRelatedPhotos(1)}
              className={nextArrowClass}
            />
          </div>

        </div>
      );
    }
  }
}

export default RelatedProducts;
