/* eslint-disable */
import React from "react";
import { useState } from "react";
import RadioBtn from "./RadioBtn.jsx";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#02075d",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};
export default function Modal({
  open,
  children,
  onClose,
  setReviewSummary,
  setReviewBody,
  setNickname,
  setRating,
}) {
  // const [reviewSummary, setReviewSummary] = useState("");

  if (!open) return null;
  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <form>
          <button onClick={onClose}>Close</button>
          <br></br>
          <label>
            Review Summary:
            <input
              type="text"
              name="name"
              onChange={(e) => setReviewSummary(e.target.value)}
            />
          </label>
          <br></br>
          <label>
            Review Body:
            <input
              type="text"
              name="name"
              onChange={(e) => setReviewBody(e.target.value)}
            />
          </label>
          <br></br>
          <label>
            What is your nickname?
            <input
              type="text"
              name="name"
              onChange={(e) => setNickname(e.target.value)}
            />
          </label>
          <br></br>
          <label>Star Rating ------- BLANK</label>
          <br></br>
          <button>Submit Review</button>
          <RadioBtn setRating={setRating} />
        </form>
        <br></br>
        {children}
      </div>
    </>
  );
}
