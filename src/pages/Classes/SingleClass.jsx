import React from 'react'
import { GiOfficeChair } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";
import './SingleClass.css'

const SingleClass = ({item,handleSelectClass}) => {
    return (
        <Fade triggerOnce={true}>
        <div className={`instructor-items min-h-[350px] relative bg-[#0D0D0D] rounded-xl border-b-2 border-yellow-400 text-white space-y-1 ${item.available_seats==0 && 'bg-red-900'}`} >
            <div className='relative truncate'>
                <img src={item.image} className='w-full h-48 rounded-t-xl'></img>
                <div className='absolute overlay w-full h-48'></div>
            </div>
            <h1 className='text-md text-gray-300 px-3'>{item.name.length>20?item.name.slice(0,20)+'...':item.name}</h1>
            <div className='py-2 px-3'>
                <p className='text-cyan-500'>Instructor: {item.instructor_name}</p>
                <p className='texl-sm'><GiOfficeChair className='inline text-lg'></GiOfficeChair>Available Seats : {item.available_seats}</p>
            </div>
            <div className='classBtn'>
            <hr/>
            <div className='w-full flex justify-around items-center'>
                <p>Price : ${item.price}</p>
                <button onClick={()=>handleSelectClass(item)} className={`my-2 px-2 text-white ${(item.available_seats==0)?'bg-gray-500 hover:bg-gray-500':'bg-sky-500 rounded hover:bg-sky-600'}`} disabled={item?.available_seats==0}>Select Class</button>
            </div>
            </div>
            
        </div>
        </Fade>
        
    )
}

export default SingleClass