import React, { useState } from "react";
import api from "../services/api";
import ReactLoading from "react-loading";
import { rootCertificates } from "tls";
import Spotify from "../components/Spotify";

export default function Landing() {
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

	const [search, setSearch] = useState("");
	const [song, setSong] = useState(noSong);
	const [loading, setLoading] = useState(false);

	// console.log(process.env.REACT_APP_BASE_URL_API);
	const handle_submit = async (event: any) => {
		setLoading(true);
		console.log("handle_submit");
		setSong(noSong);
		event.preventDefault();

		await api
			.get("/lyrics", {
				params: { search_string: search },
			})
			.then((response) => {
				setLoading(false);
				setSong(response.data);
			})
			.catch(Error);
	};

	return (
		<div id="index">
			<div className="content-wrapper">
				<Spotify />

				<h1>Suricator</h1>

				<form onSubmit={handle_submit}>
					<input
						placeholder="Nome da música e/ou artista"
						id="search"
						value={search}
						onChange={(event) => setSearch(event.target.value)}
					/>

					<button type="submit">Pesquisar</button>
				</form>

				<div>
					<h2>{song.song.title}</h2>

					<h4>{song.song.primary_artist.name}</h4>

					<div style={{ display: loading ? "block" : "none" }}>
						<ReactLoading
							type={"bars"}
							color={"#555555"}
							height={"20%"}
							width={"20%"}
						/>
					</div>

					<pre>{song.song.lyrics}</pre>
				</div>
			</div>
		</div>
	);
}
