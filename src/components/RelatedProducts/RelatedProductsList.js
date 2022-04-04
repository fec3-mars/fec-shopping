import React from 'react';
import App from '../App.js'
import { axios, makeRequest, getRelatedProducts, getRelatedDetail, getRelatedImage } from '../axios.js';

// this RelatedProductsList should stay the same for each currentproduct, thus shld be stored in global state
//this list should gather all elements/component of related products to be rendered

class RelatedProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      curProduct: props.curProduct,
      relatedProducts: [],
      relatedProductDetail: {},
      relatedProductImage: {}
    };
  }

  componentDidMount() {
    getRelatedProducts.call(this, 66642);
    getRelatedDetail.call(this, [66643, 66644, 66649, 66648]);
    getRelatedImage.call(this, [66643, 66644, 66649, 66648]);
  }


  render() {
    if (this.state.relatedProductDetail.length === this.state.relatedProducts.length) {
      // console.log('state at related render', this.state.relatedProductImage);
      return (
        <div>
          <h1>RELATED PRODUCTS</h1>
          <div className='relatedCard'>{this.state.relatedProductDetail.map((element, index) => {
            return (
              <ul key={element.id} element={element}>
                <h2 className='related category'>{element.category}</h2>
                <img className='productImage' src={this.state.relatedProductImage[index]}></img>
                <div className='related name'>{element.name}</div>
                <div className='related price'>${element.default_price}</div>
                <div className='related rating'>rating will go here</div>
              </ul>
            )
          })}
          </div>
        </div>
      )
    }
  }
}




export default RelatedProducts;