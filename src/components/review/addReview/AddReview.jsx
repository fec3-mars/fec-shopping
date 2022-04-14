/* eslint-disable */
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import "./AddReview.css";
import StarRatings from "react-star-ratings";
import { postReview, postInteraction } from "../../axios";

import RadioBtn_Size from "../submitReview/RadioBtn/Size.jsx";
import RadioBtn_Width from "../submitReview/RadioBtn/Width.jsx";
import RadioBtn_Comfort from "../submitReview/RadioBtn/Comfort.jsx";
import RadioBtn_Quality from "../submitReview/RadioBtn/Quality.jsx";
import RadioBtn_Length from "../submitReview/RadioBtn/Length.jsx";
import RadioBtn_Fit from "../submitReview/RadioBtn/Fit.jsx";

export default class AddReview extends Component {
  state = {
    rating: 0,
    // OverallRating: "",
    Recommendation: "",
    // Characteristics: "",
    ReviewSummary: "",
    ReviewBody: "",
    UploadPhotos: "",
    NickName: "",
    Email: "",
    size: "",
    width: "",
    comfort: "",
    quality: "",
    length: "",
    fit: "",
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  // handleChangeOverallRating = (e) => {
  //   this.setState({
  //     OverallRating: e.target.value,
  //   });
  // };
  handleChangeRecommendation = (e) => {
    this.setState({
      Recommendation: e.target.value,
    });
  };
  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating,
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
    // const { product_id } = this.props;

    // const { photos } = this.state;

    const postRequest = {
      product_id: 66644,
      rating: this.state.rating,
      summary: this.state.ReviewSummary,
      body: this.state.ReviewBody,
      recommend: true,
      name: this.state.NickName,
      email: this.state.Email,
      photos: [],
      characteristics: { 223579: 3.0 },
    };
    postReview(postRequest).then(console.log("worked"));
    // postReview(postRequest)
    //   .then((result) => {
    //     console.log("post review result", postRequest);
    //   })
    //   .catch((err) => {
    //     console.log("error in post question", err);
    //   });
  };

  setChangedSize = (e) => {
    console.log(e.target.value);
    this.setState({
      size: e.target.value,
    });
  };
  setChangedWidth = (e) => {
    console.log(e.target.value);
    this.setState({
      width: e.target.value,
    });
  };
  setChangedComfort = (e) => {
    console.log(e.target.value);
    this.setState({
      comfort: e.target.value,
    });
  };
  setChangedQuality = (e) => {
    console.log(e.target.value);
    this.setState({
      quality: e.target.value,
    });
  };
  setChangedLength = (e) => {
    console.log(e.target.value);
    this.setState({
      length: e.target.value,
    });
  };
  setChangedFit = (e) => {
    console.log(e.target.value);
    this.setState({
      fit: e.target.value,
    });
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
            <div className="overall-rating-container">
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
            </div>
            <div className="recommend-container">
              <Form.Label>Do you recommend this product? </Form.Label>
              <input
                type="radio"
                name="recommendation"
                value="Yes"
                onClick={this.handleChangeRecommendation}
              />
              Yes
              <input
                type="radio"
                name="recommendation"
                value="No"
                onClick={this.handleChangeRecommendation}
              />
              No
            </div>
            <div className="characteristic-container">
              <Form.Label>Characteristics? </Form.Label>
              <RadioBtn_Size setChanged={this.setChangedSize} />
              <RadioBtn_Width setChanged={this.setChangedWidth} />
              <RadioBtn_Comfort setChanged={this.setChangedComfort} />
              <RadioBtn_Quality setChanged={this.setChangedQuality} />
              <RadioBtn_Length setChanged={this.setChangedLength} />
              <RadioBtn_Fit setChanged={this.setChangedFit} />
            </div>
            <div className="input-container">
              <div className="input">
                <Form.Label>Review Summary: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChangeReviewSummary}
                  value={this.state.ReviewSummary}
                  placeholder="This product is great!"
                />
              </div>
              <div className="input">
                <Form.Label>Review Body: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChangeReviewBody}
                  value={this.state.ReviewBody}
                  placeholder="It looks great, has great qualities, etc..."
                />
              </div>
              <div className="input">
                <Form.Label>Upload Photos:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChangeUploadPhotos}
                  value={this.state.UploadPhotos}
                  placeholder="Save photo function"
                />
              </div>
              <div className="input">
                <Form.Label>What is your nickname?: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChangeNickName}
                  value={this.state.NickName}
                  placeholder="Paul"
                />
              </div>
              <div className="input">
                <Form.Label>What is your email?: </Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChangeEmail}
                  value={this.state.Email}
                  placeholder="Paul@Gmail.com"
                />
              </div>
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            onClick={() => this.handleSubmit(this.state.name)}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
