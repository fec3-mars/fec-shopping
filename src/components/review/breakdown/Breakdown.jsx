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
      one: 20,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
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
        // one: Number(Object.values(this.state.ratings.ratings)[0]) * 10 || 0,
        two: Number(Object.values(this.state.ratings.ratings)[0]) * 10 || 0,
        three: Number(Object.values(this.state.ratings.ratings)[1]) * 10 || 0,
        four: Number(Object.values(this.state.ratings.ratings)[2]) * 10 || 0,
        five: Number(Object.values(this.state.ratings.ratings)[3]) * 10 || 0,
      });
      // console.log("Changed State");
    } catch (e) {
      // console.log("Error");
    }
  }

  render(props) {
    // console.log("Rating", this.props.currentProductRating.length);
    // console.log(this.state);
    if (this.state.averageRating) {
      return (
        <div className="breakdown-container">
          <div className="rating-container">
            <h1 className="ratingNum">
              {Math.round(this.state.averageRating * 100) / 100}
            </h1>
            <StarRatings
              className="starNum"
              rating={this.state.averageRating}
              starRatedColor="yellow"
              numberOfStars={5}
              name="rating"
              starDimension="8px"
              starSpacing="0px"
              style={{ width: "85%" }}
            />
          </div>
          <h3>74% of reviews recommend this product</h3>
          <div className="star-review-bar">
            <div className="star-bar">
              1 Star:
              <BarGraph className="bar-graph" percentage={this.state.one} />
            </div>
            <div className="star-bar">
              2 Stars:
              <BarGraph className="bar-graph" percentage={this.state.two} />
            </div>
            <div className="star-bar">
              3 Stars:
              <BarGraph className="bar-graph" percentage={this.state.three} />
            </div>
            <div className="star-bar">
              4 Stars:
              <BarGraph className="bar-graph" percentage={this.state.four} />
            </div>
            <div className="star-bar">
              5 Stars:
              <BarGraph className="bar-graph" percentage={this.state.five} />
            </div>
          </div>
        </div>
      );
    }
  }
}
