import React from 'react';

const ProductSlogan = ({ slogan, handleClick }) => {


  return (
    <div data-testid="product-slogan" className="container product-slogan">
      <p onClick={() => handleClick(2)}>{slogan}</p>

    </div>
  )
}

export default ProductSlogan;