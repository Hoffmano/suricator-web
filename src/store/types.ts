export interface SongDataInterface {
	id: number;
	title: string;
	artist: string;
	album_cover: string;
    lyrics: string;
    difficulty: any;
}

export interface SongListInterface {
	[index: number]: SongDataInterface;
}

export interface StateInterface{
    songs: SongListInterface,
    song: SongDataInterface,
}

export interface AddLyricsInterface {
    type: "ADD_LYRICS";
	song: SongDataInterface
}

export interface AddSongsInterface {
    type: "ADD_SONGS";
    songs: []
}

export interface AddDifficultyInterface {
	type: "ADD_DIFFICULTY";
	difficulty: string;
}