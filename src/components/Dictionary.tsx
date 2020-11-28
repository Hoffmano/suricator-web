import React, { forwardRef, useEffect, useState } from "react";
import { useImperativeHandle } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { dictionaryAPI } from "../services/dictionary";
import { api } from "../services/API";
import "../styles/Dictionary.css";
import ReactAudioPlayer from "react-audio-player";

export const Dictionary = forwardRef((props: any, ref: any) => {
  const [dictionary, setDictionary] = React.useState({} as any);
  const [definition, setDefinition] = React.useState("Carregando definição");
  const [word, setWord] = React.useState("Carregando palavra");
  const [wordTranslated, setWordTranslated] = React.useState(
    "Carregando tradução"
  );
  const [updated, setUpdated] = React.useState(false);
  const [audio, setAudio] = useState("");

  useImperativeHandle(ref, () => ({
    async setStates(word: any, definition: any, audio: any) {
      setWordTranslated("Carregando tradução");
      setWord(word.charAt(0).toUpperCase() + word.slice(1));
      setDefinition(definition);
      setAudio(audio);
      await api.get(`/translate/${word}`).then((response) => {
        // console.log(response);
        setWordTranslated(
          response.data.charAt(0).toUpperCase() + response.data.slice(1)
        );
      });
    },
  }));

  async function getSelection() {
    setWordTranslated("Carregando tradução");
    let selectedWord = window.getSelection()?.toString();

    dictionaryAPI.get(`/${selectedWord}`).then(async (response) => {
      setWord(
        response.data[0].word.charAt(0).toUpperCase() +
          response.data[0].word.slice(1)
      );

      setDefinition(response.data[0].meanings[0].definitions[0].definition);
      setAudio(response.data[0].phonetics[0].audio);
      await api.get(`/translate/${response.data[0].word}`).then((response) => {
        setWordTranslated(
          response.data.charAt(0).toUpperCase() + response.data.slice(1)
        );
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
        <Modal.Header id="header" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{word}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactAudioPlayer src={audio} autoPlay controls />
          <p>Tradução: {wordTranslated}</p>
          <p onDoubleClick={getSelection}>{definition}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button id="closeButton" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});
