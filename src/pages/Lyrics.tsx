import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Search from "../components/Search";
import { dictionaryAPI } from "../services/dictionary";
import { Dictionary } from "../components/Dictionary";

export default function Lyrics(this: any) {
  const song = useSelector((state: any) => state.song);
  const [modalShow, setModalShow] = React.useState(false);
  const [dictionary, setDictionary] = React.useState({} as any);
  const [definition, setDefinition] = React.useState("");
  const dictionaryRef: any = React.useRef();

  function getSelection() {
    let word = window.getSelection()?.toString();

    dictionaryAPI.get(`/${word}`).then((response) => {
      setDictionary(response.data[0]);
      setDefinition(response.data[0].meanings[0].definitions[0].definition);

      dictionaryRef.current.setStates(
        response.data[0].word,
        response.data[0].meanings[0].definitions[0].definition
      );

      setModalShow(true);
    });
  }

  return (
    <div>
      <Header />
      <Search />
      <img style={{ width: 300 }} src={song.album_cover} alt={song.title} />
      <h1 onDoubleClick={getSelection}>{song.title}</h1>
      <h2>{song.artist}</h2>
      <h3>{song.difficulty}</h3>
      <pre onDoubleClick={getSelection}>{song.lyrics}</pre>
      <Dictionary
        ref={dictionaryRef}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          console.log(dictionaryRef.current);
        }}
        dictionary={dictionary}
        definition={definition}
      />
    </div>
  );
}
