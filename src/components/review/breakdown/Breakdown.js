import React, { Component } from "react";

export default class Breakdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      averageRating: 0,
    };
  }

  getAverageRating = () => {
    let temp = 0;
    for (let i = 0; i < this.props.currentProductRating.length; i++) {
      temp += this.props.currentProductRating[i].rating;
    }
    temp = temp / this.props.currentProductRating.length;
    return temp;
  };

  render() {
    // console.log("Rating", this.props.currentProductRating.length);
    return (
      <div>
        <h1>Breakdown</h1>
        <span>
          Average Rating: {this.getAverageRating()} {this.temp}
        </span>
      </div>
    );
  }
}
