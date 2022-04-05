import React from 'react';
import App from '../App.js'
import { axios, makeRequest, getRelatedProducts, getRelatedDetail, getRelatedImage } from '../axios.js';
import './Related.css';
import './star.jpeg';

// this RelatedProductsList should stay the same for each currentproduct, thus shld be stored in global state
//this list should gather all elements/component of related products to be rendered

class RelatedProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      relatedProductDetail: {},
      relatedProductImage: {}
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
      // console.log('curProduct at update', this.props.curProduct);
      getRelatedProducts.call(this, this.props.curProduct.data.id);
    }
    if (this.state.relatedProducts !== prevState.relatedProducts) {
      getRelatedDetail.call(this, this.state.relatedProducts);
      getRelatedImage.call(this, this.state.relatedProducts);
    }
  }

  comparisonModal(){
    console.log('clicked');
    console.log('state in click', this.state);
    // render(){
    //   <div>
    //     <h1>Comparion Modal</h1>
    //   </div>
    // }
  }

  render() {
    if (this.state.relatedProductDetail.length === this.state.relatedProducts.length & this.state.relatedProductImage.length === this.state.relatedProducts.length) {

      console.log('state to be rendered', this.state)
      return (
        <div className='relatedProducts'>
          <h1>RELATED PRODUCTS</h1>
          <div className='relatedCard'>{this.state.relatedProductDetail.map((element, index) => {
            return (
              <div key={element.id} element={element} className='individualCard'>
                <img className='relatedImage' src={this.state.relatedProductImage[index]}></img>
                <button className='relatedButton' onClick={this.comparisonModal} ><img src='http://imgur.com/I0EwG.png'/></button>
                <h2 className='relatedCategory'>{element.category}</h2>
                <div className='relatedName'>{element.name}</div>
                <div className='relatedPrice'>${element.default_price}</div>
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