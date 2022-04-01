import React from "react";
import Review from "./review/Review.js";
import Overview from "./OverviewComponents/Overview.js";
import QuestionList from "./Q&A/QuestionList";
import { axios, makeRequest } from "./axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProduct: {},
      totalReviews: 0,
      avgRating: 0,
      relatedProducts: [],
    };
    // bind reviewPasser
  }

  // API Calls:
  // -GET /products <-----  set state with first result
  // reviewsPasser(avgRating, totalReviews) { <------ pass this to review section
  // setState with both parameters
  // }
  // addToCartHandler() <---- pass this to overview section

  componentDidMount() {
    makeRequest.call(this, 66642);
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
        {/* <RelatedProducts /> */}
        {/* <YourOutfit /> */}
        <Overview curProduct={this.state.curProduct} />
        <Review currentProductReview={this.state.curProduct} />
        <QuestionList curProduct={this.state.curProduct} />
      </div>
    );
  }
}

export default App;
