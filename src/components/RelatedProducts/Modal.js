/* eslint-disable */
import './ComparisonModal.css';
import React from 'react';

function Modal({
  handleClose, show, children, curProduct, curCard,
}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  var arrayOfFeature = children.props.children.features;
  var curProductFeature = curProduct.data.features;

  var commonFeature = arrayOfFeature.concat(curProductFeature);
  var comparisonModal = arrayOfFeature.concat(curProductFeature);

  for (var i = 0; i < commonFeature.length; i++) {
    if (arrayOfFeature.indexOf(commonFeature[i]) !== -1) {
      comparisonModal[i].cardFeatureCheck = 'true';
    }
    else {
      comparisonModal[i].cardFeatureCheck = 'false';
    }
  }

  for (var j = 0; j < commonFeature.length; j++) {
    if (curProductFeature.indexOf(commonFeature[j]) !== -1) {
      comparisonModal[j].curFeatureCheck = 'true';
    }
    else {
      comparisonModal[j].curFeatureCheck = 'false';
    }
  }

  // console.log('comparisonModal', comparisonModal);

  return (
    <div className={showHideClassName}>
      <h2>Comparing</h2>
      {comparisonModal.map((element, index) =>
        <p key={index} >
          {/* <div type="check">{element.cardFeatureCheck}</div> */}
          {element.cardFeatureCheck}
          ---------
          {element.feature}: {element.value}
          ---------
          {element.curFeatureCheck}
        </p>
      )}
      <button type="button" onClick={handleClose}>
        &times;
      </button>

    </div>
  );
}

export default Modal;
