import React from 'react';
import './AddToCart.css';
import {
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { postToBag, axios } from '../../axios.js';
import SelectSize from './SelectSize.js';


class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: 'Select Size',
      qty: '-',
      selectSize: false
    }
    this.addToBagHandler = this.addToBagHandler.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  changeState(e) {
    console.log(e.target.value)
    if (e.target.name === 'size') {
      this.setState({
        selectedSize: e.target.value,
        selectSize: false,
        qty: 1
      })
    } else {
      this.setState({
        qty: e.target.value
      })
    }
  }

  addToBagHandler(e, style, selectedSize, qty) {
    e.preventDefault()
    if (this.state.selectedSize === 'Select Size') {
      this.setState({
        selectSize: true
      })
    }

    if (this.state.qty > 0) {
      console.log(style.style_id, style.skus[selectedSize].size, qty)
      const data = {
        sku_id: `${selectedSize}`,
        count: `${qty}`
      }
      postToBag(data, selectedSize)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle.style_id !== prevProps.selectedStyle.style_id) {
      this.setState({
        selectedSize: 'Select Size',
        qty: '-',
        selectSize: false
      })
    }
  }

  render() {
    const { selectedSize, qty, selectSize } = this.state;
    const { skus } = this.props.selectedStyle
    const nameClassAddToBag = skus?.null?.quantity === null ? "btn__add-to-bag hide" : "btn__add-to-bag";
    let quantity = skus[selectedSize]?.quantity;
    quantity = quantity >= 15 ? 15 : quantity;
    const purchaseQtys = Array.from({ length: quantity }, (_, i) => i + 1);

    return (
      <form className="add-to-cart">
        {console.log(skus)}
        <div className="select-menus" >
          <SelectSize
            handleChange={this.changeState}
            skus={Object.entries(skus).filter(([_, v]) => v?.size)}
            selectSize={selectSize}
            selectedSize={selectedSize}
          />
          <select
            value={qty}
            className="qty-input"
            name="quantity"
            onChange={this.changeState}
          >
            {(selectedSize !== 'Select Size' &&
              purchaseQtys.map(quantity => {
                return <option key={quantity} value={quantity}>{quantity}</option>
              })) || <option>-</option>
            }
          </select>
        </div>
        <div className="addToBag-Rate">
          <button onClick={(e) => { this.addToBagHandler(e, this.props.selectedStyle, selectedSize, qty) }} className={nameClassAddToBag}>
            <span>ADD TO BAG</span>
            <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>
          </button>
          <button className="star-container">
            <FontAwesomeIcon icon={faStar} className="icon__star"></FontAwesomeIcon>
          </button>
        </div>
      </form >
    )
  }
}

export default AddToCart;
