/* eslint-disable */
import React from "react";
import { useState } from "react";

export default function RadioBtn_Quality(props) {
  return (
    <div>
      <input
        type="radio"
        name="fit"
        value="1"
        onClick={(e) => props.setChanged(e, "value")}
      />
      1 - Poor
      <input
        type="radio"
        name="fit"
        value="2"
        onClick={(e) => props.setChanged(e, "value")}
      />
      2 - Below average
      <input
        type="radio"
        name="fit"
        value="3"
        onClick={(e) => props.setChanged(e, "value")}
      />
      3 - What I expected
      <input
        type="radio"
        name="fit"
        value="4"
        onClick={(e) => props.setChanged(e, "value")}
      />
      4 - Pretty great
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
