/* eslint-disable */
import React, { Component } from "react";
import { useState } from "react";
import Modal from "./Modal.jsx";

export default function submitReview() {
  const [isOpen, setIsOpen] = useState(false);
  const [reviewSummary, setReviewSummary] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [nickname, setNickname] = useState("");
  const [rating, setRating] = useState();

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
          setRating={setRating}
        >
          <br></br>
          DONT PUT PERSONAL INFO IN HERE!
        </Modal>
      </div>
    </>
  );
}
