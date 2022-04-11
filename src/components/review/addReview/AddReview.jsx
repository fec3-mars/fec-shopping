/* eslint-disable */
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/button";
import React, { Component } from "react";
import "./AddReview.css";
import StarRatings from "react-star-ratings";

export default class AddReview extends Component {
  state = {
    OverallRating: null,
    Recommendation: null,
    Characteristics: null,
    ReviewSummary: null,
    ReviewBody: null,
    UploadPhotos: null,
    NickName: null,
    Email: null,
    rating: 0,
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeOverallRating = (e) => {
    this.setState({
      OverallRating: e.target.value,
    });
  };
  handleChangeRecommendation = (e) => {
    this.setState({
      Recommendation: e.target.value,
    });
  };
  handleChangeCharacteristics = (e) => {
    this.setState({
      Characteristics: e.target.value,
    });
  };
  handleChangeReviewSummary = (e) => {
    this.setState({
      ReviewSummary: e.target.value,
    });
  };
  handleChangeReviewBody = (e) => {
    this.setState({
      ReviewBody: e.target.value,
    });
  };
  handleChangeUploadPhotos = (e) => {
    this.setState({
      UploadPhotos: e.target.value,
    });
  };
  handleChangeNickName = (e) => {
    this.setState({
      NickName: e.target.value,
    });
  };
  handleChangeEmail = (e) => {
    this.setState({
      Email: e.target.value,
    });
  };

  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating,
    });
  };
  handleSubmit = () => {
    // POST this.state to /reviews
  };

  render() {
    return (
      <Modal
        className="modal-container"
        show={this.props.isOpen}
        onHide={this.props.closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Submit a new review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>What is the Overall rating? </Form.Label>
            <StarRatings
              rating={this.state.rating}
              starRatedColor="yellow"
              numberOfStars={5}
              changeRating={this.changeRating}
              name="rating"
              starDimension="10px"
              starSpacing="5px"
            />
            {/* <Form.Control
              type="text"
              onChange={this.handleChangeOverallRating}
              value={this.state.OverallRating}
              placeholder="Make this into stars"
            /> */}
            <br></br>
            <Form.Label>Do you recommend this product? </Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChangeRecommendation}
              value={this.state.Recommendation}
              placeholder="Make this Yes or No"
            />
            <br></br>
            <Form.Label>Characteristics? </Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChangeCharacteristics}
              value={this.state.Characteristics}
              placeholder="Make this radio buttons"
            />
            <br></br>
            <Form.Label>Review Summary </Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChangeReviewSummary}
              value={this.state.ReviewSummary}
              placeholder="This product is great!"
            />
            <br></br>
            <Form.Label>Review Body </Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChangeReviewBody}
              value={this.state.ReviewBody}
              placeholder="It looks great, has great qualities, etc..."
            />
            <br></br>
            <Form.Label>Upload Photos</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChangeUploadPhotos}
              value={this.state.UploadPhotos}
              placeholder="Save photo function"
            />
            <br></br>
            <Form.Label>What is your nickname? </Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChangeNickName}
              value={this.state.NickName}
              placeholder="Paul"
            />
            <br></br>
            <Form.Label>What is your email? </Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChangeEmail}
              value={this.state.Email}
              placeholder="Paul@Gmail.com"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            onClick={() => this.props.handleSubmit(this.state.name)}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
