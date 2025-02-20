import React, { useState } from 'react'
import { IMG_CDN } from '../sharedcomponents/Constant'
import { RiHeartAdd2Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { addWatchListMovies, removeFromWatchList } from '../sharedcomponents/MovieSlice';
import { BsHeartFill } from "react-icons/bs";

const MovieCards = ({movie}) => {
  const [isWatchListAdded, setIsWatchListAdded] = useState(false)

  const dispatch = useDispatch();

  const handleAddWatchList = (movieWishListed) => {
    console.log(movieWishListed);
    if(!isWatchListAdded) {
      setIsWatchListAdded(isWatchListAdded);
      dispatch(addWatchListMovies(movieWishListed));
    }
    else {
      setIsWatchListAdded(!isWatchListAdded);
      dispatch(removeFromWatchList(movie?.id));
    }
  }

  if (!movie?.poster_path) return null;
  return (
    <div className='w-36 md:w-44 pr-4'>
      <img src={IMG_CDN + movie?.poster_path} alt="MovieImage" className='transition-transform duration-300 ease-out cursor-pointer hover:scale-105' />
      <div className='flex flex-row justify-between items-start pt-3'>
        <p className='text-white'>{movie?.title}</p>
        <div>
          {isWatchListAdded ? <BsHeartFill className='text-white size-7 cursor-pointer bg-cyan-400' onClick={() => handleAddWatchList(movie,isWatchListAdded)}/> : 
          <RiHeartAdd2Line className='text-white size-7 cursor-pointer' onClick={() => handleAddWatchList(movie,!isWatchListAdded)}/>
          }
        </div>
      </div>
    </div>
  )
}

export default MovieCards