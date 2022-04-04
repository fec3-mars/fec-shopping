import React from 'react';

const ProductSlogan = ({ product, selectedStyle }) => {

  // console.log(product)
  // console.log(selectedStyle)
  const features = product.features;


  return (
    <div data-testid="product-slogan" className="container product-slogan">

      <div className="slogan-description">
        <h2>{product.slogan}</h2>
        <p>{product.description}</p>
      </div>
      <ul className="features">
        {/* create a feature component */}


      </ul>

    </div>
  )
}

export default ProductSlogan;