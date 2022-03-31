import React, { Component } from "react";

export default class ReviewList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>ReviewList</h1>
        <button>View more...</button>
        <button>Submit New Review</button>
      </div>
    );
  }
}
