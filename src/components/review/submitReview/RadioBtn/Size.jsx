/* eslint-disable */
import React from "react";
import { useState } from "react";

export default function RadioBtn_Size({ setRating }) {
  return (
    <div>
      <input
        type="radio"
        name="fit"
        value="1"
        onClick={(e) => setRating(e.target.value)}
      />
      1 - A size too small
      <input
        type="radio"
        name="fit"
        value="2"
        onClick={(e) => setRating(e.target.value)}
      />
      2 - 1/2 a size too small
      <input
        type="radio"
        name="fit"
        value="3"
        onClick={(e) => setRating(e.target.value)}
      />
      3 - Perfect
      <input
        type="radio"
        name="fit"
        value="4"
        onClick={(e) => setRating(e.target.value)}
      />
      4 - 1/2 a size too big
      <input
        type="radio"
        name="fit"
        value="5"
        onClick={(e) => setRating(e.target.value)}
      />
      5 - A size too wide
    </div>
  );
}
