/* eslint-disable */
import React, { Component } from "react";
import Filler from "../breakdown/Filler.jsx";
import "./ProductBreakdown.css";
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
      <div className="progress-bar2">
        <div>
          <p className="breakdown-title">Product Breakdown</p>
        </div>
        <div className="individual-breakdown-container">
          <p className="breakdown-label">
            Size:
          </p>
          <div className="individual-breakdown">
            <Filler
              className="productbreakdown-size individual-filler"
              percentage={
                this.state.dataCharacteristics.Size
                  ? this.state.dataCharacteristics.Size.value * 10
                  : 1
              }
            />

          </div>
        </div>
        {/* <p>Too Small Perfect Too Large</p> */}
        <div className="individual-breakdown-container">
          <p className="breakdown-label">
            Comfort:
          </p>
          <div className="individual-breakdown">
            <Filler
              className="productbreakdown-comfort individual-filler"
              percentage={
                this.state.dataCharacteristics.Comfort
                  ? this.state.dataCharacteristics.Comfort.value * 10
                  : null
              }
            />
          </div>
        </div>
        <div className="individual-breakdown-container">

          <p className="breakdown-label">
            Width:
          </p>
          <div className="individual-breakdown">
            <Filler
              className="productbreakdown-width individual-filler"
              percentage={
                this.state.dataCharacteristics.Width
                  ? this.state.dataCharacteristics.Width.value * 10
                  : 1
              }
            />
          </div>
        </div>
        <div className="individual-breakdown-container">
          <p className="breakdown-label">
            Quality:
          </p>
          <div className="individual-breakdown">
            <Filler
              className="productbreakdown-quality individual-filler"
              percentage={
                this.state.dataCharacteristics.Quality
                  ? this.state.dataCharacteristics.Quality.value * 10
                  : null
              }
            />

          </div>
        </div>
        <div className="individual-breakdown-container">
          <p className="breakdown-label">
            Length:
          </p>
          <div className="individual-breakdown">
            <Filler
              className="productbreakdown-length individual-filler"
              percentage={
                this.state.dataCharacteristics.Length
                  ? this.state.dataCharacteristics.Length.value * 10
                  : null
              }
            />
          </div>
        </div>
        <div className="individual-breakdown-container">
          <p className="breakdown-label">
            Fit:
          </p>
          <div className="individual-breakdown">
            <Filler
              className="productbreakdown-fit individual-filler"
              percentage={
                this.state.dataCharacteristics.Fit
                  ? this.state.dataCharacteristics.Fit.value * 10
                  : null
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
