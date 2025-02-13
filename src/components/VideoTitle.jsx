import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h2 className='text-4xl font-bold'>{title}</h2>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div>
            <button className='bg-white hover:bg-opacity-80 text-black p-2 px-10 text-lg  rounded-sm'>Play</button>
            <button className='bg-gray-600 hover:bg-opacity-80 text-white p-2 px-10 mx-2 text-lg rounded-sm'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle