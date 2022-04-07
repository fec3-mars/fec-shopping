/* eslint-disable */
import React from "react";
import { useState } from "react";

export default function RadioBtn_Quality({ setRating }) {
  return (
    <div>
      <input
        type="radio"
        name="fit"
        value="1"
        onClick={(e) => setRating(e.target.value)}
      />
      1 - Poor
      <input
        type="radio"
        name="fit"
        value="2"
        onClick={(e) => setRating(e.target.value)}
      />
      2 - Below average
      <input
        type="radio"
        name="fit"
        value="3"
        onClick={(e) => setRating(e.target.value)}
      />
      3 - What I expected
      <input
        type="radio"
        name="fit"
        value="4"
        onClick={(e) => setRating(e.target.value)}
      />
      4 - Pretty great
      <input
        type="radio"
        name="fit"
        value="5"
        onClick={(e) => setRating(e.target.value)}
      />
      5 - Perfect
    </div>
  );
}
