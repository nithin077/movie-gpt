import React from 'react'
import MovieCards from './MovieCards'

const MovieSection = ( {title, movies} ) => {
  
    //{movies.map(movie =>  console.log(movie))}
    return (
        <div className='px-4 '>
            <h1 className='text-2xl py-2 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll hide-scrollbar'>
                <div className='flex'>
                    {
                    movies?.map((movie) => ( 
                         <MovieCards key={movie.id} posterPath={movie.poster_path}/>)
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieSection;