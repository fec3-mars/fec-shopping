/* eslint-disable */
import React, { Component } from "react";
import "./Breakdown.css";
import BarGraph from "./BarGraph.jsx";
import StarRatings from "react-star-ratings";
import { getMetaData, metaData } from "../../axios.js";

export default class Breakdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      averageRating: 0,
      ratings: {},
    };
  }

  getData() {
    // getMetaData();
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
    if (this.state.averageRating) {
      return (
        <div className="breakdown-container">
          <h2 className="rating">Ratings</h2>
          <span>
            <br></br>
            <h1 className="ratingNum">
              {Math.round(this.state.averageRating * 100) / 100}
            </h1>
          </span>
          <br></br>
          <StarRatings
            rating={this.state.averageRating}
            starRatedColor="yellow"
            numberOfStars={5}
            name="rating"
            starDimension="10px"
            starSpacing="5px"
          />
          <br></br>
          <BarGraph className="bar-graph" />
        </div>
      );
    }
  }
}
