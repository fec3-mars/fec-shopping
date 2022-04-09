/* eslint-disable */
import React, { Component } from "react";
import Filler from "./Filler.jsx";
import "./BarGraph.css";

const BarGraph = (props) => {
  return (
    <div className="progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  );
};

export default BarGraph;
