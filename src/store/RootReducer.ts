import { combineReducers } from "redux"
import {reducer} from "./Store"

export const RootReducer = combineReducers({
	songs: reducer
});

export type RootState = ReturnType<typeof RootReducer>