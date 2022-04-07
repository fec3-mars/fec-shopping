/* eslint-disable */
import React, { Component } from "react";
import Review from "../Review.jsx";
import "./ReviewList.css";
import Sort from "../sort/Sort.jsx";
import StarRatings from "react-star-ratings";
import moment from "moment";

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
            .slice(0, this.state.visible)
            .map((review, index) => {
              return (
                <ul key={index}>
                  <span className="reviewer_name">
                    {review.reviewer_name}
                    <br></br>
                    {moment(review.date).utc().format("YYYY-MM-DD")}
                  </span>
                  <br></br>
                  <StarRatings
                    rating={review.rating}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    name="rating"
                    starDimension="15px"
                    starSpacing="3px"
                  />
                  <br></br>
                  <span className="review-body">{review.body}</span>
                  <br></br>
                  <span>{review.summary}</span>
                  <br></br>
                  Helpful? Yes ({review.helpfulness})<br></br>
                  Report
                  <br></br>
                  Photo: <img src={review.photos[0]} alt="photo" />
                  <hr />
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
