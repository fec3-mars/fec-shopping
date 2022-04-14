/* eslint-disable */
import React, { Component } from "react";
import Review from "../Review.jsx";
import "./ReviewList.css";
import Sort from "../sort/Sort.jsx";
import StarRatings from "react-star-ratings";
import moment from "moment";
import { markReviewHelpful, reportReview } from "../../axios.js";

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
      currentProductReviewList: [],
      visible: 2,
      hideReviewButton: false,
      averageRating: 0,
    };
  }

  handleReportReview = (id) => {
    reportReview(id).then(() => console.log("removed"));
  };

  handleHelpfulnessClick = () => {
    // const { fetchReviews } = this.props;
    // Send Put request to server to update helpfulness
    markReviewHelpful()
      .then(() => console.log("hi"))
      .then(() => this.props.reload());
  };

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

  componentDidUpdate(prevProps) {
    if (this.props.currentProductReview !== prevProps.currentProductReview) {
      this.setState({
        currentProductReviewList: [...this.props.currentProductReview],
      });
    }
  }

  render(props) {
    return (
      <div className="reviewlist-container">
        <ul className="review-list">
          {this.state.currentProductReviewList
            .slice(0, this.state.visible)
            .map((review, index) => {
              return (
                <ul key={index} className="review-list-item">
                  <span className="reviewer_name">
                    {review.reviewer_name}
                    {moment(review.date).utc().format("YYYY-MM-DD")}
                  </span>
                  <StarRatings
                    rating={review.rating}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    name="rating"
                    width="75px"
                    starDimension="15px"
                    // starSpacing="-10px"
                    className="stars"
                  />
                  <span className="review-body">{review.body}</span>
                  <span className="review-summary">{review.summary}</span>
                  <div className="helpful-report-container">
                    <span
                      className="helpful"
                      onClick={() => this.handleHelpfulnessClick()}
                    >
                      Helpful? Yes ({review.helpfulness})
                    </span>
                    <a
                      className="report-link"
                      onClick={() => {
                        this.handleReportReview(review.review_id);
                      }}
                    >
                      Report
                    </a>
                  </div>
                  {review.photos[0] ? (
                    <img
                      className="photo"
                      src={review.photos[0].url}
                      alt="photo"
                    />
                  ) : null}
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
