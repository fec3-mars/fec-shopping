import React from "react";
import Review from "./review/Review.js";
import Overview from './OverviewComponents/Overview.js';
import QuestionList from './Q&A/QuestionList';
import RelatedProducts from './RelatedProducts/RelatedProductsList.js';
import OutfitList from './YourOutfit/OutfitList.js';

var Promise = require('promise');
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = process.env.TOKEN;
axios.defaults.baseURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currProduct: {},
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
    Promise.all([
      axios.get('/products')
      .then((results) => {
        console.log('results are:', results.data);
        this.setState({
          currProduct: results.data[0],
        })
      })
      .catch(err => {
        console.log(err)
      })
      // axios.get('products')
    ])



  }

  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
        <Overview />
        <RelatedProducts currProduct={this.state.currProduct}/>
        <OutfitList />
        <Review />
        <QuestionList />
      </div>
    );
  }
}

export default App;
