import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        playingMovies : null,
        movieTrailer : null
    },
    reducers : {
        addPlayingMovies : (state,action) => {
            state.playingMovies = action.payload
        },
        addMovieTrailer : (state,action) => {
            state.movieTrailer = action.payload
        }
    }
});

export const {addPlayingMovies, addMovieTrailer} = movieSlice.actions;
export default movieSlice.reducer