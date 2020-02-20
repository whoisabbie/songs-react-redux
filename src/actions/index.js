// Action creator
export const selectSong = (song) => {
    //Reurn an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};