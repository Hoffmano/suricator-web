import React from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { dictionaryAPI } from "../services/dictionary";
import Dictionary2 from "./Dictionary";

export default function Dictionary(props: any) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.dictionary.word}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p onDoubleClick={getSelection}>{props.definition}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
