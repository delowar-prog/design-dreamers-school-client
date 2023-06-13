import React from 'react'

const SinglePopularInstructor = ({instructor}) => {
    return (
        <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-center text-white space-y-2' >
            <div className='relative'>
                <img src={instructor.image} className='w-full h-64'></img>
                <div className='absolute overlay w-full h-64 top-0'></div>
            </div>
            <h1 className='text-center font-bold text-xl text-pink-400 my-5 uppercase'>{instructor.name}</h1>
            <p>Email: {instructor.email}</p>
            <p>Number of Classes : {instructor.taken_class}</p>
            <div className='w-full flex justify-center items-center'>
                <button className='bg-sky-500 my-5 py-1 px-5 text-white hover:bg-sky-600 uppercase'>See the Classes</button>
            </div>
        </div>
    )
}

export default SinglePopularInstructor