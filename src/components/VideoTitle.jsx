import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h2 className='text-xl md:text-4xl font-bold'>{title}</h2>
        <p className='hidden md:block py-6 text-lg w-1/2'>{overview}</p>
        <div className='my-2 md:m-0'>
            <button className='bg-white hover:bg-opacity-80 text-black py-1 md:py-2 px-4 md:px-10 text-md md:text-lg  rounded-sm'>Play</button>
            <button className='bg-gray-600 hidden md:inline-block hover:bg-opacity-80 text-white p-2 px-10 mx-2 text-lg rounded-sm'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle