import React from 'react';
import './AddToCart.css';
import {
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: 'Select Size',
      qty: '-',
      outOfStock: true,
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

  addToBagHandler(e) {
    e.preventDefault()
    if (this.state.selectedSize === 'Select Size') {
      this.setState({
        selectSize: true
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle.style_id !== prevProps.selectedStyle.style_id) {
      this.setState({
        selectedSize: 'Select Size',
        qty: '-',
        outOfStock: true,
        selectSize: false
      })
    }
  }

  render() {
    const skus = Object.entries(this.props.selectedStyle.skus);
    let qty = this.props.selectedStyle.skus[this.state.selectedSize]?.quantity;
    qty = qty >= 15 ? 15 : qty;
    console.log(skus[0][1].size);
    console.log(qty);
    return (
      <form className="add-to-cart">
        <div className="select-menus" >
          <div className="size-select-container">
            {this.state.selectSize && <p className="size-warning">Please select size</p>}
            {(skus[0][1].size !== null && <select value={this.state.selectedSize} name="size" className="size-input" onChange={(e) => { this.changeState(e) }} >
              <option>SELECT SIZE</option>
              {skus.map(option => {
                if (option[1].size !== null) {
                  return <option key={option[0]} value={option[0]}>{option[1].size}</option>
                }
              })}
            </select>) || <h3 className="out-of-stock">OUT OF STOCK</h3>}
          </div>
          <select value={this.state.qty} className="qty-input" name="quantity" onChange={(e) => { this.changeState(e) }}>
            {(this.state.selectedSize !== 'Select Size' &&
              Array.from({ length: qty }, (_, i) => i + 1).map(quantity => {
                return <option key={quantity} value={quantity}>{quantity}</option>
              })) || <option>-</option>
            }
          </select>
        </div>
        <div className="addToBag-Rate">
          {skus[0][1].size !== null && <button onClick={(e) => { this.addToBagHandler(e) }} className="btn__add-to-bag"><span>ADD TO BAG</span><FontAwesomeIcon icon={faPlus} color="black" ></FontAwesomeIcon></button>}
          <button className="star-container">
            <FontAwesomeIcon icon={faStar} color="black" className="icon__star"></FontAwesomeIcon>
          </button>
        </div>
      </form >
    )
  }
}

export default AddToCart;