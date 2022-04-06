import React from "react";
import "./Form.css";

function Form(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger();
          }}
        >
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Form;
