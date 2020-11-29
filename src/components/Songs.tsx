import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { api } from "../services/API";
import { SongData, SongList } from "../store/Interfaces";
import "../styles/SongsByDifficulty.css";

export default function Songs() {
  const dispatch = useDispatch();
  const history = useHistory();
  const songs = useSelector((state: any) => state.songs).slice(0, 5);

  function addLyrics(song: SongList) {
    return { type: "ADD_LYRICS", song };
  }

  const noSong = {
    song: {
      lyrics: "",
      title: "",
      primary_artist: {
        name: "",
      },
      media: [
        {
          url: "",
        },
        {
          url: "",
        },
      ],
    },
  };

  const [song, setSong] = useState(noSong);

  const handleLyrics = async (song_id: number) => {
    window.scrollTo(0, 0);

    await api
      .get("/lyrics", {
        params: { id: song_id },
      })
      .then((response) => {
        dispatch(addLyrics(response.data));
        history.push("/lyrics");
      })
      .catch(Error);
  };

  return (
    <div id="songsByDifficulty">
      {songs.length != 0 && <h1 className="difficulty">Resultados</h1>}

      <ul className="difficultyList">
        {songs.map((song: SongData) => (
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
