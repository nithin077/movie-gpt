import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        playingMovies : null,
        movieTrailer : null,
        popularMovies : null,
        topRatedMovies : null,
        upComingMovies : null,
        watchListMovies : []
    },
    reducers : {
        addPlayingMovies : (state,action) => {
            state.playingMovies = action.payload;
        },
        addMovieTrailer : (state,action) => {
            state.movieTrailer = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upComingMovies = action.payload;
        },
        addWatchListMovies : (state,action) => {
            state.watchListMovies.push(action.payload);
        },
        removeFromWatchList : (state,action) => {
            state.watchListMovies = state.watchListMovies.filter(movie => movie.id !== action.payload);
        }
    }
});

export const {addPlayingMovies, addMovieTrailer, addPopularMovies,addTopRatedMovies,addUpcomingMovies,addWatchListMovies,removeFromWatchList} = movieSlice.actions;
export default movieSlice.reducer