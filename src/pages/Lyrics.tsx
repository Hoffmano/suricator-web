import React, { useState } from "react";
// import { nlp_api } from "../services/api";
// import api from "../services/api";
// import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
// import { SongDataInterface, SongListInterface } from "../store/types";
// import { useHistory } from "react-router-dom";

export default function Lyrics() {
	// const dispatch = useDispatch();

	// function addDifficulty(difficulty: any) {
	// 	return { type: "ADD_DIFFICULTY", difficulty };
	// }

	const song = useSelector((state: any) => state.song);

	// async function get_lyrics_difficulty() {
	// 	await nlp_api
	// 		.get("/songs", {
	// 			id: song.id,
	// 			lyrics: song.lyrics,
	// 		} as any)
	// 		.then((response) => {
	// 			dispatch(addDifficulty(response.data));
	// 		})
	// 		.catch(Error);
	// }

	// get_lyrics_difficulty();

	return (
		<div>
			<img
				style={{ width: 300 }}
				src={song.album_cover}
				alt={song.title}
			/>
			<h1>{song.title}</h1>
			<h2>{song.artist}</h2>
			<h3>{song.difficulty}</h3>
			<pre>{song.lyrics}</pre>
		</div>
	);
}
