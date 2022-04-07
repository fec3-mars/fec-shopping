import React, { Component } from "react";
import Review from "../Review.jsx";
import "./ReviewList.css";
import Sort from "../sort/Sort.jsx";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
    }}
  />
);
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
    console.log("CurrentList: ", this.props.currentProductReview);
    return (
      <div className="reviewlist-container">
        <h1>Reviews</h1>
        {/* <Sort
          className="sort-container"
          // SORT BY HELPFULNESS, DATE
        /> */}
        <ul className="review-list">
          {this.props.currentProductReview
            // TODO: Add images : .photos[0].url
            .slice(0, this.state.visible)
            .map((review, index) => {
              return (
                <ul key={index}>
                  <span>{review.body}</span>
                  <br></br>
                  <span>{review.summary}</span>
                  <br></br>
                  Rating: {review.rating}
                  <br></br>
                  Reviewer_ID: {review.reviewer_name}
                  <br></br>
                  Photo: {review.review}
                  <hr />
                  {/* <img src={review.photos[index]} alt="photo" /> */}
                </ul>
              );
            })}
        </ul>
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
