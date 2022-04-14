/* eslint-disable */
import React, { Component } from "react";
import { getSort } from "../../axios.js";
import { changeShowing } from "../Review.jsx";

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  // handleChange = (event) => {
  //   this.setState({
  //     value: event.target.value,
  //   });
  // };

  // getSortData = () => {
  //   getSort().then((result) => {
  //     console.log("Sort: ", result.data.results);
  //   });
  // };

  // componentDidMount() {
  //   this.getSortData();
  // }

  render() {
    return (
      <div>
        <select
          defaultValue="Relevant"
          onChange={this.props.changeShowing}
          value={this.state.value}
        >
          <option value="Relevant">Relevant</option>
          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
        </select>
      </div>
    );
  }
}
