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
      curStyles: []
    };
    // bind reviewPasser
  }


  render() {
    return (
      <div className="app">
        {console.log(this.state)}
        <h1>Hello World</h1>
        {/* <RelatedProducts /> */}
        {/* <YourOutfit /> */}
        <Review />
        <Overview curStyles={this.state.curProduct} />
        <QuestionList />

      </div>
    );
  }
}

export default App;
