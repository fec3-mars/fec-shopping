import React, { Component } from "react";
import Form from "./Form.js";
import "./SubmitReview.css";

export default class SubmitReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonPopup: false,
      setButtonPopup: false,
    };
  }

  handleClick = () => {
    this.setState({
      buttonPopup: !this.buttonPopup,
      // setButtonPopup: !this.buttonPopup,
    });
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Submit Review
        </button>
        <Form
          trigger={this.state.buttonPopup}
          setTrigger={this.state.setButtonPopup}
        >
          <h3>Review</h3>
          <p>This is my review submit form</p>
        </Form>
      </div>
    );
  }
}
