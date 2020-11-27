import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { api } from "../services/API";
import { SongData, SongList } from "../store/Interfaces";
import "../styles/SongsByDifficulty.css"

export default function SongsByDifficulty() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [songsA1, setSongsA1] = useState([]);
  const [songsA2, setSongsA2] = useState([]);
  const [songsB1, setSongsB1] = useState([]);
  const [songsB2, setSongsB2] = useState([]);
  const [songsC1, setSongsC1] = useState([]);
  const [songsC2, setSongsC2] = useState([]);
  const [loading, setLoading] = useState(false);

  function addLyrics(song: SongList) {
    return { type: "ADD_LYRICS", song };
  }

  const handleLyrics = async (song_id: number) => {
    window.scrollTo(0, 0);
    setLoading(true);

    await api
      .get("/lyrics", {
        params: { id: song_id },
      })
      .then((response) => {
        dispatch(addLyrics(response.data));
        setLoading(false);
        history.push("/lyrics");
      })
      .catch(Error);
  };

  useEffect(() => {
    api
      .get("/songs-by-difficulty", {
        params: { difficulty: "A1" },
      })
      .then((response) => {
        console.log("test");
        setSongsA1(response.data);
      });
    api
      .get("/songs-by-difficulty", {
        params: { difficulty: "A2" },
      })
      .then((response) => {
        console.log("test");
        setSongsA2(response.data);
      });
    api
      .get("/songs-by-difficulty", {
        params: { difficulty: "B1" },
      })
      .then((response) => {
        console.log("test");
        setSongsB1(response.data);
      });
    api
      .get("/songs-by-difficulty", {
        params: { difficulty: "B2" },
      })
      .then((response) => {
        console.log("test");
        setSongsB2(response.data);
      });
    api
      .get("/songs-by-difficulty", {
        params: { difficulty: "C1" },
      })
      .then((response) => {
        console.log("test");
        setSongsC1(response.data);
      });
    api
      .get("/songs-by-difficulty", {
        params: { difficulty: "C2" },
      })
      .then((response) => {
        console.log("test");
        setSongsC2(response.data);
      });
  }, []);


  return (
    <div id="songsByDifficulty" className="mt-3 mb-3">
      <h1 className="difficulty">Dificuldade A1</h1>
      {/* <Container><Row><Col>teste</Col></Row></Container> */}
      <ul className="difficultyList">
        {songsA1.map((song: any) => (
          <li className="song">
            <button
              className="songs"
              type="submit"
              key={song.id}
              onClick={() => handleLyrics(song.id)}
            >
              <img
                className="imageCover"
                src={song.album_cover}
                alt={song.title}
              />
              {song.title} - {song.artist}
            </button>
          </li>
        ))}
      </ul>

      <h1 className="difficulty">Dificuldade A2</h1>
      <ul className="difficultyList">
        {songsA2.map((song: any) => (
          <li className="song">
            <button
              className="songs"
              type="submit"
              key={song.id}
              onClick={() => handleLyrics(song.id)}
            >
              <img
                className="imageCover"
                src={song.album_cover}
                alt={song.title}
              />
              {song.title} - {song.artist}
            </button>
          </li>
        ))}
      </ul>

      <h1 className="difficulty">Dificuldade B1</h1>
      <ul className="difficultyList">
        {songsB1.map((song: any) => (
          <li className="song">
            <button
              className="songs"
              type="submit"
              key={song.id}
              onClick={() => handleLyrics(song.id)}
            >
              <img
                className="imageCover"
                src={song.album_cover}
                alt={song.title}
              />
              {song.title} - {song.artist}
            </button>
          </li>
        ))}
      </ul>

      <h1 className="difficulty">Dificuldade B2</h1>
      <ul className="difficultyList">
        {songsB2.map((song: any) => (
          <li className="song">
            <button
              className="songs"
              type="submit"
              key={song.id}
              onClick={() => handleLyrics(song.id)}
            >
              <img
                className="imageCover"
                src={song.album_cover}
                alt={song.title}
              />
              {song.title} - {song.artist}
            </button>
          </li>
        ))}
      </ul>

      <h1 className="difficulty">Dificuldade C1</h1>
      <ul className="difficultyList">
        {songsC1.map((song: any) => (
          <li className="song">
            <button
              className="songs"
              type="submit"
              key={song.id}
              onClick={() => handleLyrics(song.id)}
            >
              <img
                className="imageCover"
                src={song.album_cover}
                alt={song.title}
              />
              {song.title} - {song.artist}
            </button>
          </li>
        ))}
      </ul>

      <h1 className="difficulty">Dificuldade C2</h1>
      <ul className="difficultyList">
        {songsC2.map((song: any) => (
          <li className="song">
            <button
              className="songs"
              type="submit"
              key={song.id}
              onClick={() => handleLyrics(song.id)}
            >
              <img
                className="imageCover"
                src={song.album_cover}
                alt={song.title}
              />
              {song.title} - {song.artist}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );  
}
