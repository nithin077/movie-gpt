import React from 'react'
import MovieCards from './MovieCards'
import { useSelector } from 'react-redux';

const WatchList = () => {
  const movieDetails = useSelector(store => store.movies.watchListMovies);
  const isWatchListed = true
  return (
    <div className='pt-[10%] mx-14 '>
      <div className='bg-slate-500 p-10 h-screen mx-14 w-11/12 flex flex-row'>
          {movieDetails.map(movie => (
            <MovieCards key={movie?.id} movie={movie} isWatchListed={isWatchListed}/>
          ))}
      </div>
    </div>
  )
}

export default WatchList