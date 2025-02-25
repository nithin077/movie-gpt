import React from 'react'
import MovieCards from './MovieCards'
import { Link } from 'react-router';

const MovieSection = ({ title, movies }) => {
    if (!movies) return null;
    return (
        <div className='px-4 '>
            <h1 className='text-lg md:text-2xl py-2 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll hide-scrollbar'>
                <div className='flex'>
                    {
                        movies?.map((movie) => (
                            <MovieCards key={movie.id} movie={movie} />
                        )
                        )}
                </div>
            </div>
        </div>
    )
}

export default MovieSection;