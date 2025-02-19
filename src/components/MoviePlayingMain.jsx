import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MoviePlayingMain = () => {
    const movies = useSelector(store  => store.movies?.playingMovies);
    if(!movies) return;
    const mainMovie = movies[0];
    const {original_title, overview,id} = mainMovie
  return (
    <div className='pt-[17%] md:pt-0'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MoviePlayingMain