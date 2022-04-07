import React from "react";
import App from "../App.js";
import {
  axios,
  makeRequest,
  getRelatedProducts,
  getRelatedDetail,
  getRelatedImage,
} from "../axios.js";
import "./Related.css";

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
  }

  // componentDidMount() {
  //   getRelatedProducts.call(this, 66642);
  //   getRelatedDetail.call(this, [66643, 66644, 66649, 66648]);
  //   getRelatedImage.call(this, [66643, 66644, 66649, 66648]);
  // }
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
    console.log('everything going inside modal', element );
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
      if (modal == null) return;
      modal.classList.add("active");
      overlay.classList.add("active");
    }

    function closeModal(modal) {
      if (modal == null) return;
      modal.classList.remove("active");
      overlay.classList.remove("active");
    }
  }

  render() {

    if (
      (this.state.relatedProductDetail.length ===
        this.state.relatedProducts.length) &
      (this.state.relatedProductImage.length ===
        this.state.relatedProducts.length)
    ) {
      // console.log('related state to be rendered', this.state)

      return (
        <div className="relatedProducts">
          <h1>RELATED PRODUCTS</h1>
          <div className='relatedCard'>{this.state.relatedProductDetail.map((element, index) => {
            return (
              <div key={element.id} element={element} className='individualCard'>
                <img className='relatedImage' src={this.state.relatedProductImage[index]}></img>
                {/* blow is popup */}
                <button data-modal-target='#modal' className='relatedButton' onClick={() => {this.comparisonModal(element)}} ><img src='http://imgur.com/I0EwG.png' /></button>
                <div className='modal' id='modal'>
                  <div className='modal-header'>
                    <h3 className='title'>Comparison Modal</h3>
                    <button data-close-button className='close-button'>&times;</button>
                  </div>
                  <div className='modal-body'>
                    {element.category}
                  </div>
                </div>
                <div id='overlay'></div>
                {/* above is popup */}

                  <h2 className="relatedCategory">{element.category}</h2>
                  <div className="relatedName">{element.name}</div>
                  <div className="relatedPrice">${element.default_price}</div>
                  <div className="relatedRating">rating will go here</div>
                </div>
              );
            })}
          </div>
        </div>
      );
      // }
    }
  }
}

export default RelatedProducts;
