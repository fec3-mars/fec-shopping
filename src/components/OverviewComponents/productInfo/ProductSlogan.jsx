import React from 'react';
import './ProductSlogan.css';

function ProductSlogan({ product }) {
  const { slogan, description } = product;

  return (
    <div data-testid="product-slogan" className="container product-slogan">
      <div className="slogan-description">
        <h2>{slogan}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductSlogan;
