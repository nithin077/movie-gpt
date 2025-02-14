import { useEffect } from 'react'
import { API_OPTIONS } from '../sharedcomponents/Constant'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../sharedcomponents/MovieSlice'


const useUpcomingMovies = () => {
    
    const dispatch = useDispatch();

    //Fetch Data from TMDB API and update Store with Movie Array
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;
