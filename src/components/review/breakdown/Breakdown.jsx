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
        one: 40,
        two: Number(Object.values(this.state.ratings.ratings)[0]) * 10,
        three: Number(Object.values(this.state.ratings.ratings)[1]) * 10,
        four: Number(Object.values(this.state.ratings.ratings)[2]) * 10,
        five: Number(Object.values(this.state.ratings.ratings)[3]) * 10,
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
          <span>
            <br></br>
            <h1 className="ratingNum">
              {Math.round(this.state.averageRating * 100) / 100}
            </h1>
          </span>
          <br></br>
          <StarRatings
            className="starNum"
            rating={this.state.averageRating}
            starRatedColor="yellow"
            numberOfStars={5}
            name="rating"
            starDimension="8px"
            starSpacing="5px"
          />
          <h3>100% of reviews recommend this product</h3>
          <br></br>
          1 Star:
          <BarGraph className="bar-graph" percentage={this.state.one} />
          2 Stars:
          <BarGraph className="bar-graph" percentage={this.state.two} />
          3 Stars:
          <BarGraph className="bar-graph" percentage={this.state.three} />
          4 Stars:
          <BarGraph className="bar-graph" percentage={this.state.four} />
          5 Stars:
          <BarGraph className="bar-graph" percentage={this.state.five} />
        </div>
      );
    }
  }
}
