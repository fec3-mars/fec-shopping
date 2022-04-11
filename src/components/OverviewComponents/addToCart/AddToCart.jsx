import React from 'react';
import './AddToCart.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { postToBag, postInteraction } from '../../axios';
import SelectSize from './SelectSize.jsx';
import SelectQty from './SelectQty.jsx';
import ButtonAddToBag from './ButtonAddToBag.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: 'SELECT SIZE',
      qty: '-',
      selectSize: false,
      purchased: false,
    };
    this.addToBagHandler = this.addToBagHandler.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { style_id: styleId } = this.props.selectedStyle;
    const { style_id: prevStyleId } = prevProps.selectedStyle;
    if (styleId !== prevStyleId) {
      this.setState({
        selectedSize: 'SELECT SIZE',
        qty: '-',
        selectSize: false,
      });
    }
  }

  changeState(e) {
    postInteraction(e, "Overview");
    if (e.target.name === 'size') {
      this.setState({
        selectedSize: e.target.value,
        selectSize: false,
        qty: e.target.value === 'SELECT SIZE' ? '-' : 1,
      });
    } else {
      this.setState({
        qty: e.target.value,
      });
    }
  }

  addToBagHandler(e, selectedSize, qty) {
    e.preventDefault();
    postInteraction(e, "Overview");
    if (selectedSize === 'SELECT SIZE') {
      this.setState({
        selectSize: true,
      });
      return;
    }
    if (qty > 0) {
      const data = {
        sku_id: `${selectedSize}`,
        count: `${qty}`,
      };
      postToBag(data, selectedSize);
      this.setState({
        purchased: true,
      });
    }
  }

  render() {
    const {
      selectedSize,
      qty,
      selectSize,
      purchased,
    } = this.state;
    const { skus } = this.props.selectedStyle;
    let quantity = skus[selectedSize]?.quantity;
    quantity = quantity >= 15 ? 15 : quantity;
    const purchaseQtys = Array.from({ length: quantity }, (_, i) => i + 1);

    return (
      <form className="add-to-cart">
        <div className="select-menus">
          <SelectSize
            changeState={this.changeState}
            skus={Object.entries(skus).filter(([_, v]) => v?.size)}
            selectSize={selectSize}
            selectedSize={selectedSize}
          />
          <SelectQty
            qty={qty}
            changeState={this.changeState}
            purchaseQtys={purchaseQtys}
            selectedSize={selectedSize}
          />
        </div>
        <div className="addToBag-Rate">
          <ButtonAddToBag
            isHidden={skus?.null?.quantity === null}
            selectedSize={selectedSize}
            qty={qty}
            purchased={purchased}
            addToBagHandler={this.addToBagHandler}
          />
          <button type="submit" className="btn__favorite">
            <FontAwesomeIcon icon={faStar} className="icon__star" />
          </button>
        </div>
      </form>
    );
  }
}

export default AddToCart;
