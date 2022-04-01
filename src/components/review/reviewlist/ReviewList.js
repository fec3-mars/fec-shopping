import React, { Component } from "react";
import Review from "../Review.js";

export default class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div>
        <h1>ReviewList</h1>
        <button>Submit New Review</button>
        <ul>
          Review 1 <br></br> Review 2 <br></br>Review 3 <br></br>Review 4
        </ul>
        {/* TODO: Condition - if there are more reviews left, this button exists.
        If not, button disappears */}
        <button>View more...</button>
      </div>
    );
  }
}
