import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Store } from "redux";
import { SongDataInterface, SongListInterface } from "../store/types";
import { RootState } from "../store/rootReducer";

export default function Songs() {
	// const [songs, setSongs] = useState("");
	const songs = useSelector((state: any) => state.songs);

	return (
		<ul>
			{songs.map((song:SongDataInterface) => (
				<li key={song.id}>
					{song.title}, {song.artist}
				</li>
			))}
		</ul>
	);
}
