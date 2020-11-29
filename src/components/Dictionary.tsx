import React, { forwardRef, useEffect, useState } from "react";
import { useImperativeHandle } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { dictionaryAPI } from "../services/dictionary";
import { api } from "../services/API";
import "../styles/Dictionary.css";
import ReactAudioPlayer from "react-audio-player";
import { unsplash } from "../services/unsplash";

export const Dictionary = forwardRef((props: any, ref: any) => {
  const [dictionary, setDictionary] = React.useState({} as any);
  const [definition, setDefinition] = React.useState("Carregando definição");
  const [word, setWord] = React.useState("Carregando palavra");
  const [wordTranslated, setWordTranslated] = React.useState(
    "Carregando tradução"
  );
  const [updated, setUpdated] = React.useState(false);
  const [audio, setAudio] = useState("");
  const [image, setImage] = useState("");

  useImperativeHandle(ref, () => ({
    async setStates(word: any, definition: any, audio: any) {
      setImage("");
      setWord("Carregando palavra");
      setWordTranslated("Carregando tradução");
      setDefinition("Carregando definição");
      setWord(word.charAt(0).toUpperCase() + word.slice(1));
      setDefinition(definition);
      setAudio(audio);

      // await unsplash
      //   .get("/search/photos", {
      //     params: {
      //       query: word,
      //       per_page: 1,
      //       orientation: "landscape",
      //       client_id: "eTI_EfploaRU1Cf98dnWDYAMvh7ULx0l63ppybtV0P8",
      //     },
      //   })
      //   .then((response: any) => {
      //     setImage(response.data.results[0].urls.regular);
      //   });

      await api.get(`/translate/${word}`).then((response) => {
        // console.log(response);
        setWordTranslated(
          response.data.charAt(0).toUpperCase() + response.data.slice(1)
        );
      });
    },
  }));

  async function getSelection() {
    setImage("");
    setWord("Carregando palavra");
    setWordTranslated("Carregando tradução");
    setDefinition("Carregando definição");

    let selectedWord = window.getSelection()?.toString();

    dictionaryAPI.get(`/${selectedWord}`).then(async (response) => {
      setWord(
        response.data[0].word.charAt(0).toUpperCase() +
          response.data[0].word.slice(1)
      );
      setDefinition(response.data[0].meanings[0].definitions[0].definition);
      setAudio(response.data[0].phonetics[0].audio);
      setImage("");

      // await unsplash
      //   .get("/search/photos", {
      //     params: {
      //       query: word,
      //       per_page: 1,
      //       orientation: "landscape",
      //       client_id: "eTI_EfploaRU1Cf98dnWDYAMvh7ULx0l63ppybtV0P8",
      //     },
      //   })
      //   .then((response: any) => {
      //     setImage(response.data.results[0].urls.regular);
      //   });

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
      id="modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header id="header" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{word}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">
          {/* <img src={image} alt={word} id="image-word" /> */}
          <ReactAudioPlayer src={audio} autoPlay controls />
          <p>Tradução: {wordTranslated}</p>
          <p id="definition" onDoubleClick={getSelection}>Definição: {definition}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
});
