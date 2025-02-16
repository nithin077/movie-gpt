import { useEffect } from "react";
import { API_OPTIONS } from "../sharedcomponents/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../sharedcomponents/MovieSlice";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const movieTrailer = useSelector(Store => Store.movies.movieTrailer);


    //Fetch Trailer using movieId
    const getMovieVideosById = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();
        const filterTrailerData = json.results.filter(
            (video) => video.type === "Trailer"
        );
        const trailer = filterTrailerData.length ? filterTrailerData[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
    };

    useEffect(() => {
       !movieTrailer && getMovieVideosById();
    }, []);
}

export default useMovieTrailer