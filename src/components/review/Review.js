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

  retrieveReviewData = () => {
    const { id } = this.props.curProduct;
    console.log("this.props", this.props.curProduct);
    axios
      .get(`/reviews/?product_id=${id}`)
      .then((response) => {
        const { results } = response.data;
        console.log("Review results", results);
        this.setState({
          currentProductReview: results,
        });
      })
      .catch((err) => {
        console.log("error in get for review", err);
      });
  };

  componentDidUpdate(prevProps) {
    if (this.props.curProduct != prevProps.curProduct) {
      this.retrieveReviewData();
    }
  }

  render(props) {
    console.log("Result in Review.js are: ", this.state.currentProductReview);

    return (
      <div>
        {/* <ReviewList currentProductReview={this.props.currentProductReview} /> */}
        {/* TODO: Make Breakdown go on left side */}
        <Breakdown />
      </div>
    );
  }
}
