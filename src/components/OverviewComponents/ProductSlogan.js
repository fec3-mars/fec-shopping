import React from 'react';
import './ProductSlogan.css';

const ProductSlogan = ({ product }) => {
  const features = product.features;


  return (
    <div data-testid="product-slogan" className="container product-slogan">

      <div className="slogan-description">
        <h2>{product.slogan}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductSlogan;