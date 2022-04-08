/* eslint-disable */
import React from "react";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import RadioBtn_Size from "./RadioBtn/Size.jsx";
import RadioBtn_Width from "./RadioBtn/Width.jsx";
import RadioBtn_Comfort from "./RadioBtn/Comfort.jsx";
import RadioBtn_Quality from "./RadioBtn/Quality.jsx";
import RadioBtn_Length from "./RadioBtn/Length.jsx";
import RadioBtn_Fit from "./RadioBtn/Fit.jsx";

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
  setRatingSize,
  setRatingWidth,
  setRatingComfort,
  setRatingQuality,
  setRatingLength,
  setRatingFit,
  setStarRating,
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
            Overall Rating:{" "}
            <StarRatings
              // rating={setStarRating}
              starRatedColor="yellow"
              numberOfStars={5}
              name="rating"
              changeRating={setStarRating}
              starDimension="20px"
              starSpacing="7px"
            />
          </label>
          <br></br>
          <label>Do you recommend this product? //TODO: YES or NO</label>
          <br></br>
          <label>
            Characteristics:
            <br></br>
            <RadioBtn_Size setRating={setRatingSize} />
            <RadioBtn_Width setRating={setRatingWidth} />
            <RadioBtn_Comfort setRating={setRatingComfort} />
            <RadioBtn_Quality setRating={setRatingQuality} />
            <RadioBtn_Length setRating={setRatingLength} />
            <RadioBtn_Fit setRating={setRatingFit} />
          </label>
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

          <button>Submit Review</button>
        </form>
        <br></br>
        {children}
      </div>
    </>
  );
}
