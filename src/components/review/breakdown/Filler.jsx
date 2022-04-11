import React from "react";

export default function Filler(props) {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
}
