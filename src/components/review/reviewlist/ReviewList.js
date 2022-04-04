import React, { Component } from "react";
import Review from "../Review.js";
// require("babel-polyfill");

export default class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductReview: [],
      visible: 2,
      hideReviewButton: false,
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

  // hideReviewButton = () => {
  //   if (this.state.visible >= this.state.currentProductReview.length) {
  //     this.setState({
  //       hideReviewButton: true,
  //     });
  //   }
  // };

  render(props) {
    console.log("Review List state: ", this.state.visible);

    return (
      <div>
        <h1>Reviews</h1>
        <li>
          {this.props.currentProductReview
            .slice(0, this.state.visible)
            .map((review, index) => {
              return <ul key={index}>{review.summary}</ul>;
            })}
        </li>
        <button>Submit New Review</button>
        <div>
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
