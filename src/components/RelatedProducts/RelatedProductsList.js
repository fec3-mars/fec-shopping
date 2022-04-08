import React from 'react';
import App from '../App.js'
import { axios, makeRequest, getRelatedProducts, getRelatedDetail, getRelatedImage } from '../axios.js';
import './Related.css';
import Modal from './Modal.js';

// this RelatedProductsList should stay the same for each currentproduct, thus shld be stored in global state
//this list should gather all elements/component of related products to be rendered
class RelatedProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      relatedProductDetail: [],
      relatedProductImage: {},
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.curProduct.data?.id !== prevProps.curProduct.data?.id) {
      getRelatedProducts.call(this, this.props.curProduct.data.id);
    }
    if (this.state.relatedProducts !== prevState.relatedProducts) {
      getRelatedDetail.call(this, this.state.relatedProducts);
      getRelatedImage.call(this, this.state.relatedProducts);
    }
  }

  render() {
    if (this.state.relatedProductDetail.length === this.state.relatedProducts.length & this.state.relatedProductImage.length === this.state.relatedProducts.length) {
      // console.log('state to be rendered', this.state)
      return (
        <div className='relatedProducts'>
          <h1>RELATED PRODUCTS</h1>
          <div className='relatedCard'>{this.state.relatedProductDetail.map((element, index) => { console.log('element at map', element, index);
            return (
              <div key={element.data.id} element={element} className='individualCard'>
                <img className='relatedImage' src={this.state.relatedProductImage[index]} onClick={() => { this.props.handleChange(element) }}
                ></img>

                <Modal show={this.state.show} handleClose={this.hideModal} element={element}>
                  <p>Modal</p>
                </Modal>

                <button className='relatedButton' onClick={this.showModal}>
                  <img src='http://imgur.com/I0EwG.png' />
                </button>

                <h2 className='relatedCategory'>{element.data.category}</h2>
                <div className='relatedName' onClick={() => { this.props.handleChange(element) }}>{element.data.name}</div>
                <div className='relatedPrice'>${element.data.default_price}</div>
                <div className='relatedRating'>rating will go here</div>
              </div>
            )
          })}
          </div>
        </div >
      )
      // }
    }
  }
}



export default RelatedProducts;