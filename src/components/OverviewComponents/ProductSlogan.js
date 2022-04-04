import React from 'react';

const ProductSlogan = ({ product, selectedStyle }) => {

  console.log(product)
  console.log(selectedStyle)


  return (
    <div data-testid="product-slogan" className="container product-slogan">

      <h2>{product.slogan}</h2>
      <p>{product.description}</p>

    </div>
  )
}

export default ProductSlogan;