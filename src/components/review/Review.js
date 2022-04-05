import React, { Component } from "react";
import ReviewList from "./reviewlist/ReviewList.js";
import Breakdown from "./breakdown/Breakdown.js";
import SubmitReview from "./submitReview/SubmitReview.js";

import axios from "axios";
import "./Review.css";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProductReview: {},
      reviews: [],
      averageRating: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.curProduct !== prevProps.curProduct) {
      // console.log("working", this.props.curProduct.data);
      this.setState({
        reviews: [...this.props.curProduct.data.results],
      });
    } else {
      // console.log("error");
    }
  }

  render(props) {
    // if (this.state.curProductReview) {
    //   console.log("Result in Review.js are: ", this.state.reviews);
    // }

    return (
      <div className="review-container">
        <div className="breakdown-reviewlist">
          <Breakdown currentProductRating={this.state.reviews} />
          <ReviewList currentProductReview={this.state.reviews} />
        </div>
        <SubmitReview />
      </div>
    );
  }
}
