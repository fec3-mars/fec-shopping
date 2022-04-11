/* eslint-disable */
import React from "react";
import { useState } from "react";

export default function RadioBtn_Comfort(props) {
  return (
    <div>
      <input
        type="radio"
        name="fit"
        value="1"
        onClick={(e) => props.setChanged(e, "value")}
      />
      1 - Uncomfortable
      <input
        type="radio"
        name="fit"
        value="2"
        onClick={(e) => props.setChanged(e, "value")}
      />
      2 - Slightly uncomfortable
      <input
        type="radio"
        name="fit"
        value="3"
        onClick={(e) => props.setChanged(e, "value")}
      />
      3 - Ok
      <input
        type="radio"
        name="fit"
        value="4"
        onClick={(e) => props.setChanged(e, "value")}
      />
      4 - Comfortable
      <input
        type="radio"
        name="fit"
        value="5"
        onClick={(e) => props.setChanged(e, "value")}
      />
      5 - Perfect
    </div>
  );
}
