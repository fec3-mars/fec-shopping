import React, { Component } from "react";
import "./Breakdown.css";
import StarRating from "../star/Star.js";

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

  componentDidUpdate() {
    try {
      let temp = 0;
      for (let i = 0; i < this.props.currentProductRating.length; i++) {
        temp += this.props.currentProductRating[i].rating;
      }
      temp = temp / this.props.currentProductRating.length;
      this.setState({
        averageRating: temp,
      });
      // console.log("Changed State");
    } catch (e) {
      // console.log("Error");
    }
  }

  render(props) {
    // console.log("Rating", this.props.currentProductRating.length);
    return (
      <div className="breakdown-container">
        <h1>Breakdown</h1>
        <span>
          {/* Average Rating: {this.getAverageRating()} */}
          {this.temp}
        </span>
        <br></br>
        <StarRating averageRating={this.state.averageRating} />
      </div>
    );
  }
}
