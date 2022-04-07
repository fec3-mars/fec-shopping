/* eslint-disable */
import React, { Component } from "react";

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    if (this.state.value === "Relevant") {
      //TODO:
    } else if (this.state.value === "Newest") {
      //TODO:
    } else if (this.state.value === "Helpful") {
      //TODO:
    }
    return (
      <div>
        <select
          defaultValue="Relevant"
          onChange={this.handleChange}
          value={this.state.value}
        >
          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
          <option value="Relevant">Relevant</option>
        </select>
      </div>
    );
  }
}
