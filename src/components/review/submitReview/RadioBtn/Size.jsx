/* eslint-disable */
import React from "react";
import { useState } from "react";

export default function RadioBtn_Size(props) {
  return (
    <div >
      <input
        type="radio"
        name="fit"
        value="1"
        onClick={(e) => props.setChanged(e, "value")}
      />
      1 - A size too small
      <input
        type="radio"
        name="fit"
        value="2"
        onClick={(e) => props.setChanged(e, "value")}
      />
      2 - 1/2 a size too small
      <input
        type="radio"
        name="fit"
        value="3"
        onClick={(e) => props.setChanged(e, "value")}
      />
      3 - Perfect
      <input
        type="radio"
        name="fit"
        value="4"
        onClick={(e) => props.setChanged(e, "value")}
      />
      4 - 1/2 a size too big
      <input
        type="radio"
        name="fit"
        value="5"
        onClick={(e) => props.setChanged(e, "value")}
      />
      5 - A size too wide
    </div>
  );
}
