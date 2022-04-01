import React, { Component } from "react";
import ReviewList from "./reviewlist/ReviewList.js";
import Breakdown from "./breakdown/Breakdown.js";
import axios from "axios";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProductReview: {},
    };
  }

  render(props) {
    // console.log("Result in Review.js are: ", this.props.curProduct.data);

    return (
      <div>
        <ReviewList currentProductReview={this.props.curProduct.data} />
        {/* TODO: Make Breakdown go on left side */}
        <Breakdown />
      </div>
    );
  }
}
