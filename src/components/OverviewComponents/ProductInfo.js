import React from 'react';
import './ProductInfo.css';

const ProductInfo = ({ product, selectedStyle }) => {

  console.log(product)
  console.log(selectedStyle)
  const discount = selectedStyle.sale_price ? true : false;
  let priceClass = discount ? "price slashed" : "price";


  return (
    <div className="container product-info">
      <div className="product-info-reviews-container">
        <p> (***********)</p>
        <span className="read-all-review">READ ALL 5 REVIEWS </span>
      </div>
      <p className="category">CATEGORY</p>
      <h1 className="product-name">{product.name}</h1>
      <div className="price-container">
        <h4 className={priceClass}>${selectedStyle.original_price}</h4>
        {discount && <h4 className="price-sale">${selectedStyle.sale_price}</h4>}
      </div>
    </div>
  )
}

export default ProductInfo;