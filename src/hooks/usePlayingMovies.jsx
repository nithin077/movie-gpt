import React, { useEffect } from 'react'
import { API_OPTIONS } from '../sharedcomponents/Constant'
import { useDispatch } from 'react-redux'
import { addPlayingMovies } from '../sharedcomponents/MovieSlice'


const usePlayingMovies = () => {
    
    const dispatch = useDispatch();

    //Fetch Data from TMDB API and update Store with Movie Array
    const getPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addPlayingMovies(json.results));
    }

    useEffect(() => {
        getPlayingMovies();
    }, []);
}

export default usePlayingMovies;
