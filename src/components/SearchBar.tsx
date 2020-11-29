import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { api } from "../services/API";
import ReactLoading from "react-loading";
import "../styles/SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  function addSongs(songs: []) {
    return { type: "ADD_SONGS", songs };
  }
    
   
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    window.scrollTo(0, 0);
    setLoading(true);
    event.preventDefault();

    await api
      .get("/songs", {
        params: { search_string: search },
      })
      .then((response) => {
        setLoading(false);
        dispatch(addSongs(response.data));
        history.push("/songs");
      })
      .catch(Error);
  };

  return (
    <form id="form" onSubmit={handleSubmit} className="">
      <div className="input-group input">
        <input
          className="p-0 pl-4"
          placeholder="Nome da música e/ou artista"
          id="searchInput"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="input-group-append">
          <button
            type="submit"
            id="searchButton"
            className="btn btn-primary p-3"
          >
            Pesquisar
          </button>
        </div>
      </div>
    </form>
  );
}
