
import React from 'react';
import App from '../App.js'
import { axios, makeRequest, getRelatedProducts, getRelatedDetail, getRelatedImage } from '../axios.js';
import './Related.css';


// this RelatedProductsList should stay the same for each currentproduct, thus shld be stored in global state
//this list should gather all elements/component of related products to be rendered

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],

      relatedProductDetail: {},
      relatedProductImage: {},

    };
    this.comparisonModal = this.comparisonModal.bind(this);
    // this.resetCurProduct = this.resetCurProduct.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.curProduct.data?.id !== prevProps.curProduct.data?.id) {
      getRelatedProducts.call(this, this.props.curProduct.data.id);
    }
    if (this.state.relatedProducts !== prevState.relatedProducts) {
      getRelatedDetail.call(this, this.state.relatedProducts);
      getRelatedImage.call(this, this.state.relatedProducts);
    }
  }


  comparisonModal(element) {
    // console.log('everything going inside modal', element );
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');


    openModalButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
      });
    });

    overlay.addEventListener("click", () => {
      const modals = document.querySelectorAll(".modal.active");
      modals.forEach((modal) => {
        closeModal(modal);
      });
    });

    closeModalButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
      });
    });

    function openModal(modal) {

      if (modal === null) return
      modal.classList.add('active')
      overlay.classList.add('active')
    }

    function closeModal(modal) {
      if (modal === null) return
      modal.classList.remove('active')
      overlay.classList.remove('active')

    }
  }

  // resetCurProduct(element){
  //   console.log('state at reset', this.state);
  //   console.log('props at reset', this.props);
  // }

render() {
    if (this.state.relatedProductDetail.length === this.state.relatedProducts.length & this.state.relatedProductImage.length === this.state.relatedProducts.length) {
      console.log('state to be rendered', this.state)
      return (
        <div className='relatedProducts'>
          <h1>RELATED PRODUCTS</h1>
          <div className='relatedCard'>{this.state.relatedProductDetail.map((element, index) => {
            return (
              <div key={element.data.id} element={element} className='individualCard'>
                <img className='relatedImage' src={this.state.relatedProductImage[index]} onClick={() => {this.props.handleChange(element)}}
                ></img>
                {/* blow is popup */}
                <button data-modal-target='#modal' className='relatedButton' onClick={() => {this.comparisonModal(element.data) }} ><img src='http://imgur.com/I0EwG.png' /></button>

                <div className='modal' id='modal'>

                  <div className='modal-header'>
                    <div className='title'>Comparing</div>
                    <button data-close-button className='close-button'>&times;</button>
                  </div>

                  <div className='modal-body'>
                    {element.data.category}
                  </div>

                </div>

                <div id='overlay'></div>
                {/* above is popup */}

                <h2 className='relatedCategory'>{element.data.category}</h2>
                <div className='relatedName' onClick={() => {this.props.handleChange(element)}}>{element.data.name}</div>
                <div className='relatedPrice'>${element.data.default_price}</div>
                <div className='relatedRating'>rating will go here</div>
              </div>
            )
          })}
          </div>
        </div>
      )
      // }
    }
  }
}



export default RelatedProducts;
