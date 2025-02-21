import React from 'react'
import { useParams } from 'react-router'
import useMovieDetailsById from '../hooks/useMovieDetailsById';
import { useSelector } from 'react-redux';

const MovieDetails = () => {

    const {id} = useParams();

    useMovieDetailsById(id);
    const movieDetails = useSelector(store => store.movies.movieDetails);
    console.log(movieDetails)

  return (
    <div className='pt-[45%] md:pt-[10%] flex flex-row pl-10'>
        <div className=''>
            Image
        </div>
        <div className=''>
            Details
        </div>
    </div>
  )
}

export default MovieDetails