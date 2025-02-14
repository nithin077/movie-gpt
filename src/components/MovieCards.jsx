import React from 'react'
import { IMG_CDN } from '../sharedcomponents/Constant'

const MovieCards = ({posterPath}) => {
  return (
    <div className='w-40 pr-4'>
        <img src={IMG_CDN + posterPath} alt="MovieImage" />
    </div>
  )
}

export default MovieCards