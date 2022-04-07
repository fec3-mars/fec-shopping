/* eslint-disable */
import React, { Component } from "react";
import { useState } from "react";
import Modal from "./Modal.jsx";

export default function submitReview() {
  const [isOpen, setIsOpen] = useState(false);
  const [reviewSummary, setReviewSummary] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [nickname, setNickname] = useState("");
  const [ratingSize, setRatingSize] = useState();
  const [ratingWidth, setRatingWidth] = useState();
  const [ratingComfort, setRatingComfort] = useState();
  const [ratingQuality, setRatingQuality] = useState();
  const [ratingLength, setRatingLength] = useState();
  const [ratingFit, setRatingFit] = useState();
  const [starRating, setStarRating] = useState();

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>Submit New Review</button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          setReviewSummary={setReviewSummary}
          setReviewBody={setReviewBody}
          setNickname={setNickname}
          setRatingSize={setRatingSize}
          setRatingWidth={setRatingWidth}
          setRatingComfort={setRatingComfort}
          setRatingQuality={setRatingQuality}
          setRatingLength={setRatingLength}
          setRatingFit={setRatingFit}
          setStarRating={setStarRating}
        >
          <br></br>
          DONT PUT PERSONAL INFO IN HERE!
        </Modal>
      </div>
    </>
  );
}
