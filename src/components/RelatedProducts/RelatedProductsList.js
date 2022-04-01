import React from 'react';
import App from '../App.js'

// this RelatedProductsList should stay the same for each currentproduct, thus shld be stored in global state
//this list should gather all elements/component of related products to be rendered

const RelatedProducts = (props) => {
  const { currProduct } = props;

  console.log('current props:', props.currProduct.name);

  return (
    <div>
      <h1>RELATED PRODUCTS</h1>
      <div className='related category'>{props.currProduct.category}</div>
      <div className='related name'>{props.currProduct.name}</div>
      <div className='related category'>${props.currProduct.default_price}</div>
    </div>
  )
}


export default RelatedProducts;