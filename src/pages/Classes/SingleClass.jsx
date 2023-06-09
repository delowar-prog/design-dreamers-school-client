import React from 'react'
import { GiOfficeChair } from "react-icons/gi";
const SingleClass = ({item}) => {
    return (
        <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-white space-y-2' >
            <div className='relative truncate'>
                <img src={item.image} className='w-full h-64'></img>
                <div className='absolute overlay w-full h-64'></div>
            </div>
            <h1 className='text-2xl text-gray-300 px-4'>{item.name}</h1>
            <div className='p-4'>
                <p className='text-cyan-500'>Instructor: {item.instructor_name}</p>
                <p><GiOfficeChair className='inline text-xl'></GiOfficeChair>Available Seats : {item.available_seats}</p>
            </div>
            <hr />
            <div className='w-full flex justify-around items-center'>
                <p>${item.price}</p>
                <button className='bg-sky-500 my-5 py-1 px-2 text-white hover:bg-sky-600 uppercase'>Select Course</button>
            </div>
        </div>
    )
}

export default SingleClass