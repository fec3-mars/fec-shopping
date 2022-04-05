import React, { Component } from "react";
import StarRatings from "react-star-ratings";

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  // changeRating(newRating, name) {
  //   this.setState({
  //     rating: this.props.averageRating,
  //   });
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.averageRating !== prevProps.averageRating) {
  //     console.log("working", this.props.averageRating);
  //     this.setState({
  //       rating: this.props.averageRating,
  //     });
  //   } else {
  //     // console.log("error");
  //   }
  // }
  render(props) {
    // console.log("Average Rating: ", this.state.rating);
    return (
      <StarRatings
        // rating={this.state.rating}
        starRatedColor="black"
        numberOfStars={5}
        name="rating"
        starDimension="20px"
        starSpacing="5px"
      />
    );
  }
}
