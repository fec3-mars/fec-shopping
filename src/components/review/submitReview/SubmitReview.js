import React, { Component } from "react";
import { useState } from "react";
import Modal from "./Modal.js";

export default function submitReview() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <br></br>
          PLACEHOLDER
        </Modal>
      </div>
    </>
  );
}
