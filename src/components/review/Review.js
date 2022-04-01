import React, { Component } from "react";
import ReviewList from "./reviewlist/ReviewList.js";
import Breakdown from "./breakdown/Breakdown.js";
import axios from "axios";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // renderProductReviewData = () => {
  //   axios
  //     .get("/reviews/?product_id=66643")
  //     .then((results) => {
  //       this.setState({
  //         currentProduct: results.data,
  //       });
  //       console.log(this.state.currentProduct);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  render(props) {
    // console.log("Result in Review.js are: ", this.props.currentProductReview);
    return (
      <div>
        <ReviewList currentProductReview={this.props.currentProductReview} />
        {/* TODO: Make Breakdown go on left side */}
        <Breakdown />
      </div>
    );
  }
}
