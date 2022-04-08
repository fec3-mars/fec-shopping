/* eslint-disable */
import React, { Component } from "react";
import ReviewList from "./reviewlist/ReviewList.jsx";
import Breakdown from "./breakdown/Breakdown.jsx";
// import SubmitReview from "./submitReview/SubmitReview.jsx";
import AddReview from "./addReview/AddReview.jsx";

import axios from "axios";
import "./Review.css";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProductReview: {},
      reviews: [],
      averageRating: null,
      isOpen: false,
    };
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

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
        <div className="breakdown-reviewList">
          <Breakdown currentProductRating={this.state.reviews} />
          <ReviewList currentProductReview={this.state.reviews} />
        </div>
        {/* <AddReview className="AddReview" /> */}
        <button onClick={this.openModal}>Submit New Review</button>

        {this.state.isOpen ? (
          <AddReview
            closeModal={this.closeModal}
            isOpen={this.state.isOpen}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
      </div>
    );
  }
}
