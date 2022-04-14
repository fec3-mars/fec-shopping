/* eslint-disable */
import React from 'react';
import {
  axios, makeReviewRequest
} from '../axios.js';
import StarRatings from "react-star-ratings";

//IndividualOutfit produce the layout of a single outfit card in the website
//each outfit card contains: a picture, category, product name, price, rating
//also contains an action button

class IndividualOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRating: 0,
      totalReviews: 0,
      curProductReview: 0,
    }
  }

  componentDidMount() {
    makeReviewRequest.call(this, this.props.element.id);
  }

  render() {
    // console.log('outfit props', this.props);
    // console.log('outfit state', this.state);
    return (
      <div>
        <img src={this.props.element.imageUrl} className='image'></img>
        <div className='contents'>
          <h2 className='category'>{this.props.element.category}</h2>
          <div className='name'>{this.props.element.name}</div>
          <div className='price'>${this.props.element.default_price}</div>
          {/* <div className='rating'>{this.state.avgRating}</div> */}
          <div className='relatedStarContainer'>
        <StarRatings
          className="relatedStar"
          rating={this.state.avgRating}

          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
          starDimension="10px"
          starSpacing="1px"
        />
        </div>
        </div>
      </div>

    )
  }
}

export default IndividualOutfit;