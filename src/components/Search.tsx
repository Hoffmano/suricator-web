import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { api } from "../services/API";
import ReactLoading from "react-loading";

export default function Search() {
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
                history.push("/")
			})
			.catch(Error);
    };
    
    return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Nome da música e/ou artista"
					id="search"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
				/>

				<button type="submit">Pesquisar</button>
			</form>

			<div style={{ display: loading ? "block" : "none" }}>
				<ReactLoading
					type={"bars"}
					color={"#555555"}
					height={"20%"}
					width={"20%"}
				/>
			</div>
		</div>
	);
}