import React from 'react'
import {v4 as uuidv4} from 'uuid'
import { Fade } from "react-awesome-reveal";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
const SingleInstructor = ({ instructor }) => {
    return (
        <Fade triggerOnce={true}>
        <div className='instructor-items bg-slate-800 border-b-2 border-yellow-400 text-center rounded-xl text-white space-y-2' >
            <div className='relative overflow-hidden'>
                <img src={instructor.image} className='w-full h-48 lg:h-60 rounded-t-xl'></img>
                <div className='absolute bg-slate-800 overlay w-full h-[50%] left-0 -bottom-96'>
                    <div className='flex flex-col gap-5 w-full justify-center items-center h-full'>
                        <p>Taken Classes: {instructor.taken_class}</p>
                        <div className='flex gap-2'>
                            <div className='flex justify-center items-center w-7 h-7 bg-gray-400 hover:cursor-pointer hover:bg-white rounded-full'>
                                <FaFacebookF className='text-blue-500'></FaFacebookF>
                            </div>
                            <div className='flex justify-center items-center w-7 h-7 bg-gray-400 hover:cursor-pointer hover:bg-white rounded-full'>
                                <FaLinkedinIn className='text-sky-500'></FaLinkedinIn>
                            </div>
                            <div className='flex justify-center items-center w-7 h-7 bg-gray-400 hover:cursor-pointer hover:bg-white rounded-full'>
                                <FaTwitter className='text-indigo-700'></FaTwitter>
                            </div>
                            <div className='flex justify-center items-center w-7 h-7 bg-gray-400 hover:cursor-pointer hover:bg-white rounded-full'>
                                <FaYoutube className='text-red-800'></FaYoutube>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-md text-pink-400 my-5'>{instructor.name}</h1>
            <div className='w-full flex justify-center items-center'>
                <button className='bg-sky-500 my-3 px-2 rounded text-white hover:bg-sky-600 uppercase'>See Details</button>
            </div>
        </div>
        </Fade>
    )
}

export default SingleInstructor