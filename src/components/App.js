import React from "react";
import Review from "./review/Review.js";
import Overview from './OverviewComponents/Overview.js';
import QuestionList from './Q&A/QuestionList';
import RelatedProducts from './RelatedProducts/RelatedProductsList.js';
import OutfitList from './YourOutfit/OutfitList.js';

import { axios, makeRequest } from "./axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProduct: {},
      totalReviews: 0,
      avgRating: 0,
      relatedProducts: [],
      curStyles: []
    };
  }


  componentDidMount() {
    makeRequest.call(this, 66642);
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
        <Overview curProduct={this.state.curProduct} />
        <RelatedProducts curProduct={this.state.curProduct} />
        <OutfitList />
        <Review currentProductReview={this.state.curProduct} />
        <QuestionList curProduct={this.state.curProduct} />
      </div>
    );
  }
}

export default App;
