import React, { useEffect, useState } from 'react'
import { IMG_CDN } from '../sharedcomponents/Constant'
import { RiHeartAdd2Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { addWatchListMovies, removeFromWatchList } from '../sharedcomponents/MovieSlice';
import { BsHeartFill } from "react-icons/bs";
import { Link } from 'react-router';

const MovieCards = ({ movie,isWatchListed}) => {
  const [isWatchListAdded, setIsWatchListAdded] = useState(isWatchListed)

  const dispatch = useDispatch();

  const watchListMovies = useSelector(store => store.movies.watchListMovies);

useEffect(() => {
  setIsWatchListAdded(watchListMovies.some(watchListMovie => watchListMovie.id === movie.id));
},[watchListMovies, movie]);

  const handleAddWatchList = (movieWishListed) => {
    if (!isWatchListAdded) {
      dispatch(addWatchListMovies(movieWishListed));
    }
    else {
      dispatch(removeFromWatchList(movie.id));
    }
  }

  if (!movie?.poster_path) return null;
  return (
    <div className='w-36 md:w-44 pr-4'>
      <Link to={'/movie/' + movie.id} key={movie.id}>
        <img src={IMG_CDN + movie?.poster_path} alt="MovieImage" className='transition-transform duration-300 ease-out cursor-pointer hover:scale-105' />
      </Link>
      <div className='flex flex-row justify-between items-start pt-3'>
        <p className='text-white'>{movie?.title}</p>
        <div>
          {isWatchListAdded ? <BsHeartFill color='cyan' className='text-white size-6 cursor-pointer ' onClick={() => handleAddWatchList(movie, setIsWatchListAdded(false))} /> :
            <RiHeartAdd2Line className='text-white size-7 cursor-pointer' onClick={() => handleAddWatchList(movie, setIsWatchListAdded(true))} />
          }
        </div>
      </div>
    </div>
  )
}

export default MovieCards