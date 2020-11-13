import React from "react";
import {useSelector } from "react-redux";
import Header from "../components/Header";
import Search from "../components/Search";

export default function Lyrics() {
	const song = useSelector((state: any) => state.song);

	return (
		<div>
			<Header/>
			<Search/>
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
