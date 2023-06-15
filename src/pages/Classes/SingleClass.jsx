import React from 'react'
import { GiOfficeChair } from "react-icons/gi";
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
const SingleClass = ({item,handleSelectClass}) => {
    const [isAdmin]=useAdmin()
    const [isInstructor] = useInstructor();
    const {_id,image,name,instructor_name,price}=item
    return (
        <div className={`instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-white space-y-2 ${item.available_seats==0 && 'bg-red-900'}`} >
            <div className='relative truncate'>
                <img src={image} className='w-full h-64'></img>
                <div className='absolute overlay w-full h-64'></div>
            </div>
            <h1 className='text-2xl text-gray-300 px-4'>{name}</h1>
            <div className='p-4'>
                <p className='text-cyan-500'>Instructor: {instructor_name}</p>
                <p><GiOfficeChair className='inline text-xl'></GiOfficeChair>Available Seats : {item.available_seats}</p>
            </div>
            <hr />
            <div className='w-full flex justify-around items-center'>
                <p>${price}</p>
                <button onClick={()=>handleSelectClass(item)} className={`my-5 py-1 px-2 text-white uppercase ${(item.available_seats==0||isAdmin||isInstructor)?'bg-gray-500 hover:bg-gray-500':'bg-sky-500 hover:bg-sky-600'}`} disabled={item?.available_seats==0||isAdmin||isInstructor}>Select Class</button>
            </div>
        </div>
    )
}

export default SingleClass