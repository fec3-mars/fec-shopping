import React from 'react';
import './AddToCart.css';
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { postToBag, axios } from '../../axios.js';
import SelectSize from './SelectSize.js';
import SelectQty from './SelectQty.js';


class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: 'SELECT SIZE',
      qty: '-',
      selectSize: false,
      purchased: false
    }
    this.addToBagHandler = this.addToBagHandler.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  changeState(e) {
    if (e.target.name === 'size') {
      this.setState({
        selectedSize: e.target.value,
        selectSize: false,
        qty: e.target.value === 'SELECT SIZE' ? '-' : 1
      })
    } else {
      this.setState({
        qty: e.target.value
      })
    }
  }

  addToBagHandler(e, selectedSize, qty) {
    e.preventDefault()
    if (this.state.selectedSize === 'SELECT SIZE') {
      this.setState({
        selectSize: true
      })
      return
    }
    if (this.state.qty > 0) {
      const data = {
        sku_id: `${selectedSize}`,
        count: `${qty}`
      }
      postToBag(data, selectedSize)
      this.setState({
        purchased: true
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle.style_id !== prevProps.selectedStyle.style_id) {
      this.setState({
        selectedSize: 'SELECT SIZE',
        qty: '-',
        selectSize: false
      })
    }
  }

  render() {
    const { selectedSize, qty, selectSize, purchased } = this.state;
    const { skus } = this.props.selectedStyle
    const nameClassAddToBag = skus?.null?.quantity === null ? "btn__add-to-bag hide" : "btn__add-to-bag";
    let quantity = skus[selectedSize]?.quantity;
    quantity = quantity >= 15 ? 15 : quantity;
    const purchaseQtys = Array.from({ length: quantity }, (_, i) => i + 1);

    return (
      <form className="add-to-cart">
        <div className="select-menus" >
          <SelectSize
            handleChange={this.changeState}
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
          {(!purchased && <button onClick={(e) => { window.confirm('Are you sure that you want to purchase item(s)?') && this.addToBagHandler(e, selectedSize, qty) }} className={nameClassAddToBag}>
            <span>ADD TO BAG</span>
            <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>
          </button>) || <p className="thank-you">Thank you for Purchase!</p>}
          <button className="btn__favorite">
            <FontAwesomeIcon icon={faStar} className="icon__star"></FontAwesomeIcon>
          </button>
        </div>
      </form >
    )
  }
}

export default AddToCart;
