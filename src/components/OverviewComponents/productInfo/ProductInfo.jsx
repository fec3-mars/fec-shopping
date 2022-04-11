import React from 'react';
import './ProductInfo.css';
import StarRatings from 'react-star-ratings';

function ProductInfo({ product, selectedStyle, reviewsInfo }) {
  const discount = selectedStyle.sale_price ? true : false;
  const priceClass = discount ? 'price slashed' : 'price';

  return (
    <div className="container product-info">
      <div className="product-info-reviews-container">
        <StarRatings
          rating={reviewsInfo.avgRating}
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
          starDimension="14px"
          starSpacing="-10px"
          className="star-rating"
        />
        <span className="read-all-review">READ ALL {reviewsInfo.totalReviews} REVIEWS </span>
      </div>
      <p className="category">
        CATEGORY:
        <span className="product-category">{product.category}</span>
      </p>
      <h1 className="product-name">{product.name}</h1>
      <div className="price-container">
        <h4 className={priceClass}>
          $
          {selectedStyle.original_price}
        </h4>
        {discount && <h4 className="price-sale">${selectedStyle.sale_price}</h4>}
      </div>
    </div>
  );
}

export default ProductInfo;
