import React from 'react';


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
        <p>AddToCart!</p>
      </div>
    )
  }
}

export default AddToCart;