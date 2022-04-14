/* eslint-disable */
import React, { Component } from "react";
import ReviewList from "./reviewlist/ReviewList.jsx";
import Breakdown from "./breakdown/Breakdown.jsx";
import ProductBreakdown from "./productbreakdown/ProductBreakdown.jsx";
import AddReview from "./addReview/AddReview.jsx";
import Sort from "./sort/Sort.jsx";
import "./Review.css";
import {
  getSortNewest,
  getSortHelpful,
  getSortRelevant,
  postInteraction,
} from "../axios.js";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // reviews: [],
      averageRating: null,
      isOpen: false,
      sortHelpful: [],
      sortRelevant: [],
      sortNewest: [],
      currentShowing: "Relevant",
    };
    // this.fetchReviews = this.fetchReviews.bind(this);
  }

  // fetchReviews() {
  //   // fetch data
  //   console.log("Fetching reviews again from API!!!");
  //   getSortRelevant().then(({ data }) =>
  //     this.setState({ reviews: data.results })
  //   );
  // }

  setCurrentShowing = (e) => {
    this.setState({
      currentShowing: e.target.value,
    });
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  componentDidUpdate(prevProps) {
    // if (this.props.curProduct !== prevProps.curProduct) {
    //   this.setState({
    //     reviews: [...this.props.curProduct.data.results],
    //   });
    // }
    // console.log(this.state.reviews);
  }

  componentDidMount() {
    // this.fetchReviews();
    this.getSortDataNewest();
    this.getSortDataHelpful();
    this.getSortDataRelevant();
  }

  getSortDataNewest = () => {
    getSortNewest().then((result) => {
      this.setState({ sortNewest: result.data.results });
    });
  };

  getSortDataHelpful = () => {
    getSortHelpful().then((result) => {
      this.setState({ sortHelpful: result.data.results });
    });
  };

  getSortDataRelevant = () => {
    getSortRelevant().then((result) => {
      this.setState({ sortRelevant: result.data.results });
    });
  };

  render(props) {
    // console.log("Render", this.state.sortNewest);
    if (this.state.currentShowing === "Relevant") {
      return (
        <div
          onClick={(e) => {
            postInteraction(e, "Reviews");
          }}
          className="review-container"
          id="reviewsID"
        >
          <Sort
            className="sort-container"
            changeShowing={this.setCurrentShowing}
          />
          <h1 className="rating-header">Ratings & Reviews</h1>
          <div className="breakdown-reviewList">
            <Breakdown currentProductRating={this.state.sortRelevant} />
            <ProductBreakdown />
            <ReviewList
              fetchReviews={this.fetchReviews}
              currentProductReview={this.state.sortRelevant}
              reload={this.props.reload}
            />
          </div>
          {/* <AddReview className="AddReview" /> */}
          <button className="submit-review" onClick={this.openModal}>
            Submit New Review
          </button>
          {this.state.isOpen ? (
            <AddReview
              closeModal={this.closeModal}
              isOpen={this.state.isOpen}
              handleSubmit={this.handleSubmit}
              productId={this.props.data}
            />
          ) : null}
          <div className="button-container"></div>
        </div>
      );
    }
    // else if (this.state.currentShowing === "Newest") {
    //   return (
    //     <div
    //       onClick={(e) => {
    //         postInteraction(e, "Reviews");
    //       }}
    //       className="review-container"
    //       id="reviewsID"
    //     >
    //       <h1 className="rating-header">Ratings & Reviews</h1>
    //       <Sort
    //         className="sort-container"
    //         changeShowing={this.setCurrentShowing}
    //       />
    //       <div className="breakdown-reviewList">
    //         <Breakdown currentProductRating={this.state.sortNewest} />
    //         <ReviewList currentProductReview={this.state.sortNewest} />
    //       </div>
    //       {/* <AddReview className="AddReview" /> */}
    //       <button className="submit-review" onClick={this.openModal}>
    //         Submit New Review
    //       </button>
    //       {this.state.isOpen ? (
    //         <AddReview
    //           closeModal={this.closeModal}
    //           isOpen={this.state.isOpen}
    //           handleSubmit={this.handleSubmit}
    //         />
    //       ) : null}
    //       <div className="button-container"></div>
    //     </div>
    //   );
    // }
    // else if (this.state.currentShowing === "Helpful") {
    //   return (
    //     <div
    //       onClick={(e) => {
    //         postInteraction(e, "Reviews");
    //       }}
    //       className="review-container"
    //       id="reviewsID"
    //     >
    //       <h1 className="rating-header">Ratings & Reviews</h1>
    //       <Sort
    //         className="sort-container"
    //         changeShowing={this.setCurrentShowing}
    //       />
    //       <div className="breakdown-reviewList">
    //         <Breakdown currentProductRating={this.state.sortHelpful} />
    //         <ReviewList currentProductReview={this.state.sortHelpful} />
    //       </div>
    //       {/* <AddReview className="AddReview" /> */}
    //       <button className="submit-review" onClick={this.openModal}>
    //         Submit New Review
    //       </button>
    //       {this.state.isOpen ? (
    //         <AddReview
    //           closeModal={this.closeModal}
    //           isOpen={this.state.isOpen}
    //           handleSubmit={this.handleSubmit}
    //         />
    //       ) : null}
    //       <div className="button-container"></div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Unavailable</h1>
    //     </div>
    //   );
    // }
  }
}
