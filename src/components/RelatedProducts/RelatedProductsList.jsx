import React from 'react';
import App from '../App.js'
import { axios, makeRequest, getRelatedProducts, getRelatedDetail, getRelatedImage } from '../axios.js';
import IndividualProduct from './IndividualProduct.js';
import './Related.css';
import Modal from './Modal.js';

// this RelatedProductsList should stay the same for each currentproduct, thus shld be stored in global state
//this list should gather all elements/component of related products to be rendered
class RelatedProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      relatedProductDetail: [2],
      relatedProductImage: {},
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = (e) => {
    console.log('e at shgowmodal', e);
    this.setState({
      show: true,
      clickedItem: e,
    });
  };

  hideModal = (e) => {
    console.log('state at hide', this.state);
    console.log('e at hidemodal', e);
    this.setState({
      show: false,
      clickedItem: this.state.clickedItem
    });
  };

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

      return (
        <div className='relatedProducts'>
          <h1>RELATED PRODUCTS</h1>

          <div className='relatedCard'>{this.state.relatedProductDetail.map((element, index) => {
            // console.log('element at map', element, index);
            return (
              <div key={element.data.id} element={element} className='individualCard'>

                {/* {element.data.id === this.state.relatedProductImage.id && <IndividualProduct
                curCard={element}
                curPic={this.state.relatedProductImage[index]}
                handleChang={this.props.handleChange}/>} */}
                <IndividualProduct
                  curCard={element}
                  curPic={this.state.relatedProductImage[index]}
                  handleChang={this.props.handleChange}
                  curProduct={this.props.curProduct} />
              </div>
            )
          })}
          </div>
        </div >
      )
    }
  }
}



export default RelatedProducts;