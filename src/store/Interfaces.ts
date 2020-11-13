export interface SongData {
	id: number;
	title: string;
	artist: string;
	album_cover: string;
    lyrics: string;
    difficulty: any;
}

export interface SongList {
	[index: number]: SongData;
}

export interface State{
    songs: SongList,
    song: SongData,
}

export interface AddLyrics {
    type: "ADD_LYRICS";
	song: SongData
}

export interface AddSongs {
    type: "ADD_SONGS";
    songs: []
}

export interface AddDifficulty {
	type: "ADD_DIFFICULTY";
	difficulty: string;
}