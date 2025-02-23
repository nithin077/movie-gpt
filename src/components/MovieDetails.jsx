import React from 'react'
import { useParams } from 'react-router'
import useMovieDetailsById from '../hooks/useMovieDetailsById';
import { useSelector } from 'react-redux';
import { IMG_CDN } from '../sharedcomponents/Constant';

const MovieDetails = () => {

    const {id} = useParams();

    useMovieDetailsById(id);
    const movieDetails = useSelector(store => store.movies.movieDetails);
    console.log(movieDetails)

  return (
    <div className='pt-[45%] md:pt-[10%] flex flex-row pl-10 '>
        <div className='w-80'>
            <img src={IMG_CDN + movieDetails?.poster_path} alt="MovieImage" className='rounded-lg'/>
        </div>
        <div className='p-4'>
          <p className='text-4xl'>{movieDetails?.original_title}</p>
          <p className='pt-4'>{movieDetails?.release_date}</p>
        </div>
    </div>
  )
}

export default MovieDetails