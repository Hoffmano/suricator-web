import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { dictionaryAPI } from "../services/dictionary";
import { Dictionary } from "../components/Dictionary";
import "../styles/Lyrics.css"

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
  if (song.album_cover == null) {
    song.album_cover = 'https://images.rapgenius.com/012fdf6487acd682eddc8d3debdc4eac.300x300x1.jpg';
    song.title = 'Back in Black';
    song.artist = 'AC/DC';
    song.difficulty = 'A2';
    song.lyrics = 'Back in black, I hit the sack\nI\'ve been too long, I\'m glad to be back\nYes, I\'m let loose from the noose\nThat\'s kept me hanging about\nI\'m just looking at the sky \'cause it\'s getting me high\nForget the hearse, \'cause I\'ll never die\nI got nine lives, cat\'s eyes\nAbusing every one of them and running wild\n\n\n\'Cause I\'m back, yes I\'m back\nWell, I\'m back, yes I\'m back\nWell, I\'m back, back\nWell, I\'m back in black\nYes, I\'m back in black\n\n\nBack in the back of a Cadillac\nNumber one with a bullet, I\'m a power pack\nYes, I\'m in a bang with a gang\nThey\'ve got to catch me if they want me to hang\n\'Cause I\'m back on the track and I\'m beatin\' the flack\nNobody\'s gonna get me on another rap\nSo, look at me now, I\'m just making my play\nDon\'t try to push your luck, just get out of my way\n\n\n\'Cause I\'m back, yes I\'m back\nWell, I\'m back, yes I\'m back\nWell, I\'m back, back\nWell, I\'m back in black\nYes, I\'m back in black\n\n\n\n\nWell, I\'m back, yes I\'m back\nWell, I\'m back, yes I\'m back\nWell, I\'m back, back\nWell, I\'m back in black\nYes, I\'m back in black, yow\n\n\nAh, yeah\nOh, yeah\nTake my love\nYeah, yeah\nYeah\nAh, hey yeah\nOoh, yeah\n\n\nWell, I\'m back \nBack, well I\'m \nBack \nBack \nBack \nBack, back in black\nYes, I\'m back in black\n\n\nI\'ve hit the sack\n\'';
  }
  // let message = 'Back in black, I hit the sack\nI\'ve been too long, I\'m glad to be back\nYes, I\'m let loose from the noose\nThat\'s kept me hanging about\nI\'m just looking at the sky \'cause it\'s getting me high\nForget the hearse, \'cause I\'ll never die\nI got nine lives, cat\'s eyes\nAbusing every one of them and running wild\n\n\n\'Cause I\'m back, yes I\'m back\nWell, I\'m back, yes I\'m back\nWell, I\'m back, back\nWell, I\'m back in black\nYes, I\'m back in black\n\n\nBack in the back of a Cadillac\nNumber one with a bullet, I\'m a power pack\nYes, I\'m in a bang with a gang\nThey\'ve got to catch me if they want me to hang\n\'Cause I\'m back on the track and I\'m beatin\' the flack\nNobody\'s gonna get me on another rap\nSo, look at me now, I\'m just making my play\nDon\'t try to push your luck, just get out of my way\n\n\n\'Cause I\'m back, yes I\'m back\nWell, I\'m back, yes I\'m back\nWell, I\'m back, back\nWell, I\'m back in black\nYes, I\'m back in black\n\n\n\n\nWell, I\'m back, yes I\'m back\nWell, I\'m back, yes I\'m back\nWell, I\'m back, back\nWell, I\'m back in black\nYes, I\'m back in black, yow\n\n\nAh, yeah\nOh, yeah\nTake my love\nYeah, yeah\nYeah\nAh, hey yeah\nOoh, yeah\n\n\nWell, I\'m back \nBack, well I\'m \nBack \nBack \nBack \nBack, back in black\nYes, I\'m back in black\n\n\nI\'ve hit the sack\n\'';
  return (
    <div>
      <Navbar />
      {/* <Search /> */}
      <div id="musicInfos">
        <div className="row mb-4">
          <div id="musicImage">
            <img id="cover" src={song.album_cover} alt={song.title} />
          </div>
          <div id="musicDetails">
            <h1 id="title" onDoubleClick={getSelection}>{song.title}</h1>
            <h2>{song.artist}</h2>
            <h3>{song.difficulty}</h3>
          </div>
        </div>
        <div className="row">
          <div id="musicLyric">
            <pre onDoubleClick={getSelection}>{song.lyrics}</pre>
          </div>
        </div>
      </div>
      
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
