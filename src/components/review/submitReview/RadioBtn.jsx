import React from "react";
import { useState } from "react";

export default function RadioBtn({ setRating }) {
  return (
    <div>
      <h1>Fit</h1>
      <input
        type="radio"
        name="fit"
        value="goodFit"
        onClick={(e) => setRating(e.target.value)}
      />
      Fits like a glove
      <input
        type="radio"
        name="fit"
        value="okayFit"
        onClick={(e) => setRating(e.target.value)}
      />
      Meh
      <input
        type="radio"
        name="fit"
        value="badFit"
        onClick={(e) => setRating(e.target.value)}
      />
      Who is this made for? Ants?
    </div>
  );
}
