import React from 'react'
import { useParams } from 'react-router'
import useMovieDetailsById from '../hooks/useMovieDetailsById';
import { useSelector } from 'react-redux';
import { IMG_CDN } from '../sharedcomponents/Constant';

const MovieDetails = () => {

  const { id } = useParams();

  useMovieDetailsById(id);
  const movieDetails = useSelector(store => store.movies.movieDetails);

  return (
    <div className='pt-[45%] md:pt-[10%] flex flex-row pl-10 '>
      <div className='w-80'>
        <img src={IMG_CDN + movieDetails?.poster_path} alt="MovieImage" className='rounded-lg' />
      </div>
      <div className='p-4 w-2/3'>
        <p className='text-4xl'>{movieDetails?.original_title}</p>
        <p className='text-xl'>{movieDetails?.tagline}</p>
        <p className='pt-4'>{movieDetails?.release_date}</p>
        <p className='pt-4'>{movieDetails?.overview}</p>
        {movieDetails?.genres.map((genre => (
          <button key={genre.id} className=' px-4 py-2 m-4 bg-amber-300 rounded-full'>{genre.name}</button>
        )
        ))}
        <div className='flex flex-row gap-5 align-middle'>
          <p className='font-bold font-xl'>RunTime : </p>
          <p>{movieDetails?.runtime} Mints</p>
          <p className='font-bold font-xl'>Language : </p>
          <p>{movieDetails?.spoken_languages[0]?.english_name}</p>
        </div>
        <img src={IMG_CDN + movieDetails?.production_companies[0]?.logo_path} alt="production-company-logo" className='w-32 m-8' />
        <a href={movieDetails?.homepage} target='_blank' className='m-8 px-4 py-2 bg-white rounded-full border border-black hover:bg-amber-300 hover:border-none'>Website</a>
      </div>
    </div>
  )
}

export default MovieDetails