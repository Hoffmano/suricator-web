import React, { useState } from "react";
import api from "../services/api";
import { nlp_api } from "../services/api";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { SongDataInterface, SongListInterface } from "../store/types";
import { useHistory } from "react-router-dom";

export default function Landing() {
	const dispatch = useDispatch();
	const history = useHistory();
	const songs = useSelector((state: any) => state.songs);

	function addSongs(songs: []) {
		return { type: "ADD_SONGS", songs };
	}

	function addLyrics(song: SongListInterface) {
		return { type: "ADD_LYRICS", song };
	}

	function addDifficulty(difficulty: any) {
		return { type: "ADD_DIFFICULTY", difficulty };
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

	const [search, setSearch] = useState("");
	const [song, setSong] = useState(noSong);
	const [loading, setLoading] = useState(false);

	const song_data = useSelector((state: any) => state.song);

	const handleSubmit = async (event: any) => {
		setLoading(true);
		event.preventDefault();

		await api
			.get("/songs", {
				params: { search_string: search },
			})
			.then((response) => {
				setLoading(false);
				dispatch(addSongs(response.data));
			})
			.catch(Error);
	};

	const handleLyrics = async (song_id: number) => {
		setLoading(true);

		await api
			.get("/lyrics", {
				params: { id: song_id },
			})
			.then((response) => {
				setLoading(false);
				dispatch(addLyrics(response.data));
				nlp_api
					.post("/", {
						id: response.data.id,
						lyrics: response.data.lyrics,
					})
					.then((response) => {
						dispatch(addDifficulty(response.data.difficulty));
						history.push("/lyrics");
					})
					.catch(Error);
			})
			.catch(Error);
	};

	return (
		<div id="index">
			<div className="content-wrapper">
				<h1>Suricator</h1>

				<form onSubmit={handleSubmit}>
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
					<p>{song.song.primary_artist.name}</p>

					<div style={{ display: loading ? "block" : "none" }}>
						<ReactLoading
							type={"bars"}
							color={"#555555"}
							height={"20%"}
							width={"20%"}
						/>
					</div>

					<ul>
						{songs.map((song: SongDataInterface) => (
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
			</div>
		</div>
	);
}
