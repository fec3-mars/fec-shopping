/* eslint-disable */
import React, { Component } from "react";
import "./Breakdown.css";
import StarRating from "../star/Star.jsx";
import BarGraph from "./BarGraph.jsx";

export default class Breakdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      averageRating: 0,
    };
  }

  // getAverageRating = () => {
  //   let temp = 0;
  //   for (let i = 0; i < this.props.currentProductRating.length; i++) {
  //     temp += this.props.currentProductRating[i].rating;
  //   }
  //   temp = temp / this.props.currentProductRating.length;
  //   return temp;
  // };

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
        <h1>Ratings & Reviews</h1>
        <span>
          <br></br>
          <h2>{this.state.averageRating}</h2>
          {this.temp}
        </span>
        <BarGraph />
        <br></br>
        <StarRating averageRating={this.state.averageRating} />
      </div>
    );
  }
}
