/* eslint-disable */
import './ComparisonModal.css';
import React from 'react';

function Modal({
  handleClose, show, children, curProduct, curCard,
}) {
  const showHideClassName = show ? 'related-modal display-block' : 'related-modal display-none';

  var arrayOfFeature = children.props.children.features;
  var curProductFeature = curProduct.data.features;

  var commonFeature = arrayOfFeature.concat(curProductFeature);
  var comparisonModal = arrayOfFeature.concat(curProductFeature);

  for (var i = 0; i < commonFeature.length; i++) {
    if (arrayOfFeature.indexOf(commonFeature[i]) !== -1) {
      comparisonModal[i].cardFeatureCheck = '✓';
    }
    else {
      comparisonModal[i].cardFeatureCheck = 'X';
    }
  }

  for (var j = 0; j < commonFeature.length; j++) {
    if (curProductFeature.indexOf(commonFeature[j]) !== -1) {
      comparisonModal[j].curFeatureCheck = '✓';
    }
    else {
      comparisonModal[j].curFeatureCheck = 'X';
    }
  }

  // console.log('comparisonModal', comparisonModal);

  return (
    <div className={showHideClassName}>

      <div className="modal-header">
        <h2 className='comparingtitle'>Comparing Features</h2>
        <button type="button" className="close-button" onClick={handleClose}>
          &times;
        </button>
      </div>

      <div className='modal-body'>
        {comparisonModal.map((element, index) =>
          <p key={index} >
            {/* <div type="check">{element.cardFeatureCheck}</div> */}
            <div className='column1'>{element.cardFeatureCheck}</div>

            <div className='column2'>{element.feature}: {element.value}</div>

            <div className='column3'>{element.curFeatureCheck}</div>
          </p>
        )}
      </div>

    </div>
  );
}

export default Modal;
