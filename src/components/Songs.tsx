import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { api } from "../services/API";
import { SongData, SongList } from "../store/Interfaces";
import "../styles/SongsByDifficulty.css";
import "../styles/Songs.css"

export default function Songs() {
    const dispatch = useDispatch();
	const history = useHistory();
	const songs = useSelector((state: any) => state.songs).slice(0, 5);

	function addSongs(songs: []) {
		return { type: "ADD_SONGS", songs };
	}

	function addLyrics(song: SongList) {
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
    
	return (
		<div className="mt-3 mb-3">
			<h2>{song.song.title}</h2>
			<p>{song.song.primary_artist.name}</p>

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
