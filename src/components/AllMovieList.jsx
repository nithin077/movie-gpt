import React from 'react'
import MovieSection from './MovieSection'
import { useSelector } from 'react-redux'

const AllMovieList = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies && (
      <div className='bg-black'>
        <div className='-mt-52 pl-12 relative z-20'>
          <MovieSection title={"Now Playing"} movies={movies.playingMovies} />
          <MovieSection title={"Popular"} movies={movies.popularMovies} />
          <MovieSection title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieSection title={"Up Coming"} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  )
}

export default AllMovieList