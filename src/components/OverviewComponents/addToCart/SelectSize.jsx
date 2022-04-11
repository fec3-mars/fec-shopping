import React from 'react';
import './SelectSize.css';

function SelectSize({
  changeState,
  selectSize,
  skus,
  selectedSize,
}) {
  return (
    <div className="size-select-container">
      {selectSize && <p className="size-warning">Please select size</p>}
      {(skus.length && (
        <select value={selectedSize} name="size" className="size-input" onChange={changeState}>
          <option>SELECT SIZE</option>
          {skus.map(([k, v]) => {
            if (v.size !== null) {
              return <option key={k} value={k}>{v.size}</option>;
            }
          })}
        </select>
      )) || <h3 className="out-of-stock">OUT OF STOCK</h3>}
    </div>
  );
}

export default SelectSize;
