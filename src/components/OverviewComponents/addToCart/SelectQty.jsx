import React from 'react';
import './SelectQty.css';

const SelectQty = ({ qty, changeState, purchaseQtys, selectedSize }) => {
  return (
    <select
      value={qty}
      className="qty-input"
      name="quantity"
      onChange={changeState}
    >
      {(selectedSize !== 'SELECT SIZE' &&
        purchaseQtys.map((quantity, idx) => {
          return <option key={idx} value={quantity}>{quantity}</option>
        })) || <option>-</option>
      }
    </select>
  )
}

export default SelectQty;