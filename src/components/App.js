import React from "react";
import Review from "./review/Review.js";
import Overview from './OverviewComponents/Overview.js';
import QuestionList from './Q&A/QuestionList'

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

  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
        <RelatedProducts />
        <YourOutfit />
        <Review />
        <Overview />
        <QuestionList />

      </div>
    );
  }
}

export default App;
