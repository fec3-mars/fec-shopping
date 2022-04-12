/* eslint-disable */
import React from "react";
import Modal from "./Modal.js";

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log('props in comparison', this.props);
    return <div>{this.props.curFeature.feature}</div>;
  }
}

export default Comparison;
