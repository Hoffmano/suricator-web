import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	AddSongs,
	AddLyrics,
	AddDifficulty,
} from "./Interfaces";

const InitialState: any = {
	songs: [],
	song: {},
};

export function reducer(
	state = InitialState,
	action: AddSongs | AddLyrics | AddDifficulty
) {
	switch (action.type) {
		case "ADD_SONGS":
			return { ...state, songs: [...action.songs] };
		case "ADD_LYRICS":
			return { ...state, song: action.song };
		case "ADD_DIFFICULTY":
			return {
				...state,
				song: { ...state.song, difficulty: action.difficulty },
			};
		default:
			return state;
	}
}

const store = createStore(reducer, composeWithDevTools());

export default store;
