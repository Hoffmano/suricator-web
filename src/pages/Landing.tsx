import { request } from "https";
import React, { useState } from "react";
import api from "../services/api";

export default function Landing() {
	const [search, setSearch] = useState("");
	const [song, setSong] = useState({ lyrics: "" });

	const handle_submit = async (event: any) => {
		event.preventDefault();
		console.log("handle_submit");
		await api
			.get("/lyrics", {
				params: { search_string: search },
			})
			.then((response) => {
				setSong(response.data);
			})
			.catch(Error);
	};

	return (
		<div id="index">
			{console.log("This")}
			<div className="content-wrapper">
				<h1>Suricator</h1>
				<p>{search}</p>
				<form onSubmit={handle_submit}>
					<input
						placeholder="Nome da música e/ou nome do artista"
						id="search"
						value={search}
						onChange={(event) => setSearch(event.target.value)}
					/>
					<button type="submit">Search</button>
				</form>
				<pre>{song.lyrics}</pre>
			</div>
		</div>
	);
}
