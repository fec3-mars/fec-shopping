import React from 'react';

const ProductInfo = ({ product, selectedStyle }) => {

  console.log(product)
  console.log(selectedStyle)

  return (
    <div className="container product-info">
      <div className="product-info-reviews-container">
        <p> stars component</p>
        <span className="read-all-review">READ ALL 5 REVIEWS (needs to scroll to other comp)</span>
      </div>
      <h3>CATEGORY</h3>
      <h1>{product.name}</h1>
    </div>
  )
}

export default ProductInfo;