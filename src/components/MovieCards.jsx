import React from 'react'
import { IMG_CDN } from '../sharedcomponents/Constant'

const MovieCards = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-40 pr-4 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110 hover:shadow-xxl'>
        <img src={IMG_CDN + posterPath} alt="MovieImage" />
    </div>
  )
}

export default MovieCards