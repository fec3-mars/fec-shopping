import React, { Component } from "react";
import Review from "../Review.js";
import "./ReviewList.css";

export default class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductReview: [],
      visible: 2,
      hideReviewButton: false,
      averageRating: 0,
    };
  }

  showMoreItems = () => {
    const updatedList = this.state.visible + 2;
    this.setState({
      visible: updatedList,
    });
    if (this.state.visible > this.state.currentProductReview.length + 2) {
      this.setState({
        hideReviewButton: true,
      });
    }
  };

  render(props) {
    // console.log(this.props.currentProductReview);
    return (
      <div className="reviewlist-container">
        <h1>Reviews</h1>
        <li className="review-list">
          {this.props.currentProductReview
            .slice(0, this.state.visible)
            .map((review, index) => {
              return (
                <ul key={index}>
                  {review.summary}
                  <br></br>
                  Rating: {review.rating}
                  <br></br>
                  Reviewer_ID: {review.reviewer_name}
                </ul>
              );
            })}
        </li>
        <div className="view-more-button">
          {this.state.hideReviewButton ? null : (
            <button className="moreReviews" onClick={this.showMoreItems}>
              View more...
            </button>
          )}
        </div>
      </div>
    );
  }
}

// returns
