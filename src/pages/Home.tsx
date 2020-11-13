import React, { useState } from "react";
import {api} from "../services/API";
import { useDispatch, useSelector } from "react-redux";
import { SongData, SongList } from "../store/Interfaces";
import { useHistory } from "react-router-dom";
import Search from "../components/Search";
import Songs from "../components/Songs";
import Header from "../components/Header";

export default function Landing() {
	return (
		<div id="index">
			<div className="content-wrapper">
				<Header/>
				<Search />
				<Songs/>
			</div>
		</div>
	);
}
