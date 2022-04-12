/* eslint-disable */
import React, { Component } from "react";
import ReviewList from "./reviewlist/ReviewList.jsx";
import Breakdown from "./breakdown/Breakdown.jsx";
// import SubmitReview from "./submitReview/SubmitReview.jsx";
import AddReview from "./addReview/AddReview.jsx";
import Sort from "./sort/Sort.jsx";
import "./Review.css";
import { getSortNewest, getSortHelpful, getSortRelevant, postInteraction } from "../axios.js";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProductReview: {},
      reviews: [],
      averageRating: null,
      isOpen: false,
      sortHelpful: {},
      sortRelevant: {},
      sortNewest: {},
    };
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  componentDidUpdate(prevProps) {
    if (this.props.curProduct !== prevProps.curProduct) {
      this.setState({
        reviews: [...this.props.curProduct.data.results],
      });
    }
  }

  render(props) {
    // console.log("Render", this.state.sortNewest);
    return (
      <div onClick={(e) => { postInteraction(e, "Reviews") }} className="review-container" id="reviewsID">
        <h1 className="rating-header">Ratings & Reviews</h1>
        <Sort className="sort-container" />
        <div className="breakdown-reviewList">
          <Breakdown currentProductRating={this.state.reviews} />
          <ReviewList currentProductReview={this.state.reviews} />
        </div>
        {/* <AddReview className="AddReview" /> */}
        <button className="submit-review" onClick={this.openModal}>Submit New Review</button>
        {this.state.isOpen ? (
          <AddReview
            closeModal={this.closeModal}
            isOpen={this.state.isOpen}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
        <div className="button-container"></div>
      </div>
    );
  }
}
