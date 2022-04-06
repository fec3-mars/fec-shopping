import React, { Component } from "react";
import { useState } from "react";
import Modal from "./Modal.js";

export default function submitReview() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>Submit New Review</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <br></br>
          DONT PUT PERSONAL INFO IN HERE!
        </Modal>
      </div>
    </>
  );
}
