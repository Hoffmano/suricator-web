import React, { forwardRef, useEffect, useState } from "react";
import { useImperativeHandle } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { dictionaryAPI } from "../services/dictionary";
import { unsplash } from "../services/image.js";

export const Dictionary = forwardRef((props: any, ref: any) => {
  const [dictionary, setDictionary] = React.useState({} as any);
  const [definition, setDefinition] = React.useState("as");
  const [word, setWord] = React.useState("a");
  const [image, setImage] = React.useState("");
  const [updated, setUpdated] = React.useState(false);

  useImperativeHandle(ref, () => ({
    setStates(word: any, definition: any) {
      setWord(word.charAt(0).toUpperCase() + word.slice(1));
      setDefinition(definition);
      unsplash
        .get("/search/photos", {
          params: {
            query: word,
            per_page: 1,
            orientation: "landscape",
            client_id: "eTI_EfploaRU1Cf98dnWDYAMvh7ULx0l63ppybtV0P8",
          },
        })
        .then((response: any) => {
          console.log(response);
          setImage(response.data.results[0].urls.regular);
        });
    },
  }));

  function getSelection() {
    let selectedWord = window.getSelection()?.toString();

    dictionaryAPI.get(`/${selectedWord}`).then((response) => {
      setWord(
        response.data[0].word.charAt(0).toUpperCase() +
          response.data[0].word.slice(1)
      );

      setDefinition(response.data[0].meanings[0].definitions[0].definition);

      unsplash
        .get("/search/photos", {
          params: {
            query: word,
            per_page: 1,
            orientation: "landscape",
            client_id: "eTI_EfploaRU1Cf98dnWDYAMvh7ULx0l63ppybtV0P8",
          },
        })
        .then((response: any) => {
          console.log(response);
          try {
            setImage(response.data.results[0].urls.regular);
          } catch (e) {
            setImage("");
          }
        });
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
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{word}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image} alt="" />
          <p onDoubleClick={getSelection}>Definição: {definition}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});
