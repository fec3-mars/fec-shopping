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
      curSize: 'Select Size',
      qty: '-',
      outOfStock: true
    }
  }

  componentDidMount() {

    // fetch curStyles

    // this.setState({
    //   curProduct: this.props.curProduct,
    //   curStyles: curStyles,
    //   curSelectedStyle: curStyles[0]
    // })
  }

  render() {
    return (
      <div className="add-to-cart">
        <form>
          <div className="select-menus">
            <select>

            </select>
            <select>

            </select>
          </div>
          <div className="addToCart-Rate">
            <button className="btn__add-to-bag"><span>ADD TO BAG</span><FontAwesomeIcon icon={faPlus} color="black" ></FontAwesomeIcon></button>
            <div>
              <FontAwesomeIcon icon={faStar} color="black" ></FontAwesomeIcon>
            </div>

          </div>
        </form>
      </div>
    )
  }
}

export default AddToCart;