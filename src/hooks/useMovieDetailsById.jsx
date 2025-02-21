import { useEffect } from "react";
import { API_OPTIONS } from "../sharedcomponents/Constant"
import { useDispatch } from "react-redux";
import { addMoveDetailsById } from "../sharedcomponents/MovieSlice";
const useMovieDetailsById = (movieId) => {

    const dispatch = useDispatch();

    const getMovieDetailsById = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"?language=en-US", API_OPTIONS);
        const json = await data.json();
        dispatch(addMoveDetailsById(json));
    }

    useEffect(() => {
        getMovieDetailsById();
    },[]);
}

export default useMovieDetailsById;