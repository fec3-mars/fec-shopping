import React, { Component } from "react";

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: false,
      sortOrder: this.props.sortOrder,
    };
  }

  sortOption = () => {
    this.setState({
      displayed: false,
      sortOrder: sort,
    });
  };
  render() {
    return (
      <div>
        <select defaultValue="Relevant">
          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
          <option value="Relevant">Relevant</option>
        </select>
      </div>
    );
  }
}
