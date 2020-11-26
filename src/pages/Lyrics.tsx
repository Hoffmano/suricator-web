import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Search from "../components/Search";
import { dictionaryAPI } from "../services/dictionary";
import Dictionary from "../components/Dictionary";

export default function Lyrics(this: any) {
  const song = useSelector((state: any) => state.song);
  const [modalShow, setModalShow] = React.useState(false);
  const [dictionary, setDictionary] = React.useState({} as any);
  const [definition, setDefinition] = React.useState("");

  function getSelection() {
    let word = window.getSelection()?.toString();
    dictionaryAPI.get(`/${word}`).then((response) => {
      response.data[0].meanings.map((meaning: any) => {
        meaning.definitions.map((definition: any) => {
          console.log(definition);
        });
      });
      console.log(response.data[0]);
        setDictionary(response.data[0])
        setDefinition(response.data[0].meanings[0].definitions[0].definition);
      setModalShow(true);
    });
  }

  return (
    <div>
      <Header />
      <Search />
      <img style={{ width: 300 }} src={song.album_cover} alt={song.title} />
      <h1>{song.title}</h1>
      <h2>{song.artist}</h2>
      <h3>{song.difficulty}</h3>
      <pre onDoubleClick={getSelection}>{song.lyrics}</pre>
      <Dictionary
        show={modalShow}
        onHide={() => setModalShow(false)}
              dictionary={dictionary}
              definition={definition}
      />
    </div>
  );
}
