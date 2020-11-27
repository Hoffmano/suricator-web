import React, { forwardRef, useEffect, useState } from "react";
import { useImperativeHandle } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { dictionaryAPI } from "../services/dictionary";
import "../styles/Dictionary.css"

export const Dictionary = forwardRef((props: any, ref: any) => {
  const [dictionary, setDictionary] = React.useState({} as any);
  const [definition, setDefinition] = React.useState("as");
  const [word, setWord] = React.useState("a");
  const [updated, setUpdated] = React.useState(false);

  useImperativeHandle(ref, () => ({
    setStates(word: any, definition: any) {
      setWord(word.charAt(0).toUpperCase() + word.slice(1));

      setDefinition(definition);
    },
  }));

  // useEffect(() => {
  //   if (props.dictionary.word != undefined && !updated)
  //     setWord(
  //       props.dictionary.word.toString().charAt(0).toUpperCase() +
  //         props.dictionary.word.slice(1)
  //     );

  //   if (props.dictionary != undefined && !updated) {
  //     setDictionary(props.dictionary);
  //     setDefinition(props.definition);
  //   }
  // });

  function getSelection() {
    let selectedWord = window.getSelection()?.toString();

    dictionaryAPI.get(`/${selectedWord}`).then((response) => {
      setWord(
        response.data[0].word.charAt(0).toUpperCase() +
          response.data[0].word.slice(1)
      );

      setDefinition(response.data[0].meanings[0].definitions[0].definition);
    });
  }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header id="header" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{word}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p onDoubleClick={getSelection}>{definition}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button id="closeButton" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});
