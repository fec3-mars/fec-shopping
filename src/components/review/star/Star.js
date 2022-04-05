import React, { Component } from "react";

export default class Star extends Component {
  constructor(props) {
    super(props);

    this.state = {
      star: [],
    };
  }

  createStar = () => {};

  render() {
    console.log("Product rating", this.props.currentProductRating);
    return <div>{this.state.star}</div>;
  }
}
