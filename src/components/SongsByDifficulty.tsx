import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { api } from "../services/API";
import { SongData, SongList } from "../store/Interfaces";

export default function SongsByDifficulty() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [songsA, setSongsA] = useState([]);
  const [songsB, setSongsB] = useState([]);
  const [songsC, setSongsC] = useState([]);
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

  api
    .get("/songs-by-difficulty", {
      params: { difficulty: "A2" },
    })
    .then((response) => {
      console.log("test")
      setSongsA(response.data)
    });

  return (
    <div>
      <h1>Dificuldade A1 e A2</h1>
      <ul>
        {songsA.map((song: any) => (
          <li>
            <button
              type="submit"
              key={song.id}
              onClick={() => handleLyrics(song.id)}
            >
              <img
                style={{ width: 100 }}
                src={song.album_cover}
                alt={song.title}
              />
              {song.title} - {song.artist}
            </button>
          </li>
        ))}
      </ul>
      <h1>Dificuldade B1 e B2</h1>
      <ul>
        {songsB.map((song: any) => (
          <li>
            <button
              type="submit"
              key={song.id}
              onClick={() => handleLyrics(song.id)}
            >
              <img
                style={{ width: 100 }}
                src={song.album_cover}
                alt={song.title}
              />
              {song.title} - {song.artist}
            </button>
          </li>
        ))}
      </ul>
      <h1>Dificuldade C1 e C2</h1>
      <ul>
        {songsC.map((song: any) => (
          <li>
            <button
              type="submit"
              key={song.id}
              onClick={() => handleLyrics(song.id)}
            >
              <img
                style={{ width: 100 }}
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
