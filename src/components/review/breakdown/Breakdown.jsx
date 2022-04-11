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
      percentage: 60,
    };
  }

  getData() {
    getMetaData().then((result) => {
      this.setState({
        ratings: result.data,
      });
    });
  }

  componentDidMount() {
    this.getData();
  }
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
    // this.getData();
    console.log(this.state.ratings.ratings);
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
          1 Star:
          <BarGraph className="bar-graph" percentage={40} />
          2 Stars:
          <BarGraph className="bar-graph" percentage={this.state.percentage} />
          3 Stars:
          <BarGraph className="bar-graph" percentage={this.state.percentage} />
          4 Stars:
          <BarGraph className="bar-graph" percentage={80} />5 Stars:{" "}
          <BarGraph className="bar-graph" percentage={10} />
        </div>
      );
    }
  }
}
