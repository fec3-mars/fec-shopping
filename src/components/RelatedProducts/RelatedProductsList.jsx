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
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.scroll = this.scroll.bind(this);
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

  scroll() {
    const productContainers = [...document.querySelectorAll('.productContainer')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      })

      preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      })
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
    // console.log('state to be rendered', this.state)
    if (this.state.relatedProductDetail.length === this.state.relatedProducts.length && this.state.relatedProductImage.length === this.state.relatedProducts.length) {
      // console.log('state to be rendered', this.state)
      var details = this.state.relatedProductDetail;

      const a3 = this.state.relatedProductDetail.map(t1 => ({ ...t1, ...this.state.relatedImage.find(t2 => t2.id === t1.data.id) }))
      // console.log('here is detail', a3);

      return (
        <div className="productContainer">
          <h1>RELATED PRODUCTS</h1>
          <button className='pre-btn' onClick={this.scroll}><img src='https://i.imgur.com/XskcMGz.png' /></button>
          <button className='nxt-btn' onClick={this.scroll}><img src='https://i.imgur.com/XskcMGz.png' /></button>

          <div className="relatedCard">
            {a3.map((element, index) =>
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
          </div>

        </div>
      );
    }
  }
}

export default RelatedProducts;
