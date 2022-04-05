import React, { Component } from "react";

export default class Sort extends Component {
  render() {
    return (
      <div>
        <select>
          <option value="1">Sort By</option>
          <option value="1">Helpful</option>
          <option value="2">Newest</option>
          <option value="3">Relevant</option>
        </select>
      </div>
    );
  }
}
