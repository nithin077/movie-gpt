import { useEffect } from 'react'
import { API_OPTIONS } from '../sharedcomponents/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../sharedcomponents/MovieSlice'


const useTopRatedMovies = () => {
    
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(Store => Store.movies.topRatedMovies);


    //Fetch Data from TMDB API and update Store with Movie Array
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;
