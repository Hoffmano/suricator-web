import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	AddSongsInterface,
	AddLyricsInterface,
	AddDifficultyInterface,
} from "./types";

const InitialState: any = {
	songs: [],
	song: {},
};

export function songsReducer(
	state = InitialState,
	action: AddSongsInterface | AddLyricsInterface | AddDifficultyInterface
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

const store = createStore(songsReducer, composeWithDevTools());

export default store;
