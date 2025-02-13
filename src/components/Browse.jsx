import React from 'react'
import Header from './Header'
import usePlayingMovies from '../hooks/usePlayingMovies'
import MoviePlayingMain from './MoviePlayingMain';
import AllMovieList from './AllMovieList';

const Browse = () => {

  usePlayingMovies();
  return (
    <div>
        <Header />
        <MoviePlayingMain />
        <AllMovieList />
    </div>
  )
}

export default Browse