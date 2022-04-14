/* eslint-disable */
import React, { Component } from "react";
import Filler from "./Filler.jsx";
// import "./BarGraph.css";
import { getMetaData, metaData } from "../../axios.js";

export default class ProductBreakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
      comfort: 0,
      width: 0,
      quality: 0,
      length: 0,
      fit: 0,
      ratings: [],
      dataCharacteristics: {},
    };
  }

  getData() {
    getMetaData().then((result) => {
      this.setState({
        dataCharacteristics: result.data.characteristics,
      });
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    // if (this.state.dataCharacteristics.Comfort) {
    //   console.log(this.state.dataCharacteristics.Comfort.value);
    // }
    return (
      <div className="progress-bar">
        Size
        <Filler
          className="productbreakdown-size"
          percentage={
            this.state.dataCharacteristics.Size
              ? this.state.dataCharacteristics.Size.value * 10
              : 1
          }
        />
        <p>Too Small Perfect Too Large</p>
        comfort
        <Filler
          className="productbreakdown-comfort"
          percentage={
            this.state.dataCharacteristics.Comfort
              ? this.state.dataCharacteristics.Comfort.value * 10
              : null
          }
        />
        width
        <Filler
          className="productbreakdown-width"
          percentage={
            this.state.dataCharacteristics.Width
              ? this.state.dataCharacteristics.Width.value * 10
              : 1
          }
        />
        quality
        <Filler
          className="productbreakdown-quality"
          percentage={
            this.state.dataCharacteristics.Quality
              ? this.state.dataCharacteristics.Quality.value * 10
              : null
          }
        />
        length
        <Filler
          className="productbreakdown-length"
          percentage={
            this.state.dataCharacteristics.Length
              ? this.state.dataCharacteristics.Length.value * 10
              : null
          }
        />
        fit
        <Filler
          className="productbreakdown-fit"
          percentage={
            this.state.dataCharacteristics.Fit
              ? this.state.dataCharacteristics.Fit.value * 10
              : null
          }
        />
      </div>
    );
  }
}
