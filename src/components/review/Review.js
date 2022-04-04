import React, { Component } from "react";
import ReviewList from "./reviewlist/ReviewList.js";
import Breakdown from "./breakdown/Breakdown.js";
import axios from "axios";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProductReview: {},
      reviews: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.curProduct !== prevProps.curProduct) {
      // console.log("working", this.props.curProduct.data);
      this.setState({
        curProductReview: this.props.curProduct.data,
        reviews: [...this.props.curProduct.data.results],
      });
    } else {
      // console.log("error");
    }
  }

  render(props) {
    if (this.state.curProductReview) {
      // console.log("Result in Review.js are: ", this.state.reviews);
    }

    return (
      <div>
        <ReviewList currentProductReview={this.state.reviews} />
        {/* TODO: Make Breakdown go on left side */}
        <Breakdown />
      </div>
    );
  }
}
