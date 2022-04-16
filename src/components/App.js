/* eslint-disable */
import React, { lazy } from "react";
import "./App.css";
// import Review from "./review/Review.jsx";
// import RelatedProducts from "./RelatedProducts/RelatedProductsList.jsx";
// import OutfitList from "./YourOutfit/OutfitList.js";

const RelatedProducts = lazy(() => import('./RelatedProducts/RelatedProductsList.jsx'));
const OutfitList = lazy(() => import('./YourOutfit/OutfitList.js'));
const QuestionList = lazy(() => import('./Q&A/QuestionList/QuestionList.jsx'));
const Overview = lazy(() => import('./OverviewComponents/Overview.jsx'));
const Review = lazy(() => import('./review/Review.jsx'));

import {
  axios,
  makeRequest,
  makeReviewRequest,
  getRelatedProducts,
  getRelatedDetail,
} from "./axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProduct: {},
      curProductReview: {},
      totalReviews: 0,
      avgRating: 0,
      relatedProducts: [],
      curStyles: [],
      allOutfits: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // console.log('hello from handlechange', e);
    this.setState({
      curProduct: e,
    });
  }

  reviewReload() {
    makeReviewRequest.call(this, 66644);
  }

  componentDidMount() {
    makeRequest.call(this, 66642);
    // makeReviewRequest.call(this, 66644);
    this.reviewReload();
  }

  render() {
    return (
      <div className="app">
        <img
          src="https://preview.redd.it/qbh4tjh310211.jpg?auto=webp&s=81e3af80ce1d7173fd6e70a8df635e03b9a2677a"
          className="logo"
        />
        <Overview
          curProduct={this.state.curProduct}
          totalReviews={this.state.totalReviews}
          avgRating={this.state.avgRating}
        />
        <RelatedProducts
          curProduct={this.state.curProduct}
          handleChange={this.handleChange}
        />
        <OutfitList curProduct={this.state.curProduct} />
        <Review
          reload={this.reviewReload.bind(this)}
          curProduct={this.state.curProductReview}
        />
        <QuestionList curProduct={this.state.curProduct} />
      </div>
    );
  }
}

export default App;
