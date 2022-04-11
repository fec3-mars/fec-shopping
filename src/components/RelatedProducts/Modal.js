/* eslint-disable */
import './modal.css';
import React from 'react';

function Modal({
  handleClose, show, children, curProduct, curCard,
}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  var arrayOfFeature = children.props.children.features;
  // console.log('arrayOfFeature: ', arrayOfFeature);
  var curProductFeature = curProduct.data.features;
  // console.log('curProduct: ', curProduct);


  return (
    <div className={showHideClassName}>
      <h2>Comparing</h2>
      {arrayOfFeature.map((element, index) =>
        <p key={index} >
          {element.feature}: {element.value}
        </p>
      )}
      ++++++
      {curProductFeature.map((element, index) =>
        <p key={index} >
          {element.feature}: {element.value}
        </p>
      )}
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
}

export default Modal;
