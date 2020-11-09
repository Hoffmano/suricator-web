import { combineReducers } from "redux"
import {songsReducer} from "./index"

export const RootReducer = combineReducers({
	songs: songsReducer
});

export type RootState = ReturnType<typeof RootReducer>
// {posts: PostsState, comments: CommentsState, users: UsersState}