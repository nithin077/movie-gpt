import React from 'react'
import Header from './Header'
import usePlayingMovies from '../hooks/usePlayingMovies'
import MoviePlayingMain from './MoviePlayingMain';
import AllMovieList from './AllMovieList';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

  usePlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
        <Header />
        <MoviePlayingMain />
        <AllMovieList />
    </div>
  )
}

export default Browse