import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ButtonAddToBag({
  isHidden,
  selectedSize,
  qty,
  purchased,
  addToBagHandler,
}) {
  if (purchased) {
    return <p className="thank-you">Thank you for Purchase!</p>;
  }
  if (isHidden) {
    return null;
  }
  return (
    <button
      type="submit"
      onClick={(e) => {
        addToBagHandler(e, selectedSize, qty);
      }}
      className="btn__add-to-bag"
    >
      <span>ADD TO BAG</span>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export default ButtonAddToBag;
