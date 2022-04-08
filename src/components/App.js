/* eslint-disable */
import React from "react";
import Review from "./review/Review.js";

import Overview from "./OverviewComponents/Overview.js";
import QuestionList from "./Q&A/QuestionList";
import RelatedProducts from "./RelatedProducts/RelatedProductsList.jsx";
import OutfitList from "./YourOutfit/OutfitList.js";

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
      allOutfits: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // console.log('hello from handlechange', e);
    this.setState({
      curProduct: e,
    })
  }

  componentDidMount() {
    makeRequest.call(this, 66642);

    makeReviewRequest.call(this, 66643);
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
        <Overview curProduct={this.state.curProduct} />
        <RelatedProducts curProduct={this.state.curProduct} handleChange={this.handleChange}/>
        <OutfitList curProduct={this.state.curProduct} />
        <Review curProduct={this.state.curProductReview} />
        <QuestionList curProduct={this.state.curProduct} />
      </div>
    );
  }
}

export default App;
