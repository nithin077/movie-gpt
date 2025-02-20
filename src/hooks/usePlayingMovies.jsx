import React, { useEffect } from 'react'
import { API_OPTIONS } from '../sharedcomponents/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { addPlayingMovies } from '../sharedcomponents/MovieSlice'


const usePlayingMovies = () => {
    
    const dispatch = useDispatch();
    const currentPlayingMovies = useSelector(Store => Store.movies.playingMovies);


    //Fetch Data from TMDB API and update Store with Movie Array
    const getPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS)
        const json = await data.json();
        dispatch(addPlayingMovies(json.results));
    }

    useEffect(() => {
        !currentPlayingMovies && getPlayingMovies();
    }, []);
}

export default usePlayingMovies;
