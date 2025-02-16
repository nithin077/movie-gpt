import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        showGptSearch : false,
        gptMovies : null,
        tmdbResults : null
    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults : (state, action) => {
            const {gptMovies, tmdbResults} = action.payload
            state.gptMovies = gptMovies;
            state.tmdbResults = tmdbResults;
        }
    }
});

export const {toggleGptSearchView, addGptMovieResults} = gptSlice.actions;

export default gptSlice.reducer;