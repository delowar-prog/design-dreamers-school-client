import React from 'react'
import Container from '../../components/Container/Container'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import img1 from '../../assets/instructors/1.jpg'
import img2 from '../../assets/instructors/2.jpg'
import img3 from '../../assets/instructors/3.jpg'
import { GiOfficeChair } from "react-icons/gi";
import { Helmet } from 'react-helmet-async'
const Classes = () => {
  return (
    <div className='bg-pink-600 pb-20'>
    <Helmet><title>SCFDS || Classes</title></Helmet>
      <SectionTitle heading={'Our all classes'} subHeading={'Visit to find your favorite classes'}></SectionTitle>
      <Container>
        <div className='grid grid-cols-3 gap-5'>
          <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-white space-y-2' >
            <div className='relative truncate'>
              <img src={img1} className='w-full h-64'></img>
              <div className='absolute overlay w-full h-64'></div>
            </div>
            <h1 className='text-2xl text-gray-300 px-4'>Fashion Sketching and Illustration</h1>
            <div className='p-4'>
              <p className='text-cyan-500'>Instructor: Md. Abdul Karim Molla</p>
              <p><GiOfficeChair className='inline text-xl'></GiOfficeChair>Available Seats : 2</p>
            </div>
            <hr/>
            <div className='w-full flex justify-around items-center'>
              <p>TK. 20,000</p>
              <button className='bg-sky-500 my-5 py-1 px-2 text-white hover:bg-sky-600 uppercase'>Select Course</button>
            </div>
          </div>
          <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-white space-y-2' >
            <div className='relative'>
              <img src={img1} className='w-full h-64'></img>
              <div className='absolute overlay w-full h-64 top-0'></div>
            </div>
            <h1 className='text-2xl text-gray-300 px-4'>Fashion Sketching and Illustration</h1>
            <div className='p-4'>
              <p className='text-cyan-500'>Instructor: Md. Abdul Karim Molla</p>
              <p>Available Seats : 2</p>
            </div>
            <hr/>
            <div className='w-full flex justify-around items-center'>
              <p>TK. 20,000</p>
              <button className='bg-sky-500 my-5 py-1 px-2 text-white hover:bg-sky-600 uppercase'>Select Course</button>
            </div>
          </div>
          <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-white space-y-2' >
            <div className='relative'>
              <img src={img1} className='w-full h-64'></img>
              <div className='absolute overlay w-full h-64 top-0'></div>
            </div>
            <h1 className='text-2xl text-gray-300 px-4'>Fashion Sketching and Illustration</h1>
            <div className='p-4'>
              <p className='text-cyan-500'>Instructor: Md. Abdul Karim Molla</p>
              <p>Available Seats : 2</p>
            </div>
            <hr/>
            <div className='w-full flex justify-around items-center'>
              <p>TK. 20,000</p>
              <button className='bg-sky-500 my-5 py-1 px-2 text-white hover:bg-sky-600 uppercase'>Select Course</button>
            </div>
          </div>
          <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-white space-y-2' >
            <div className='relative'>
              <img src={img1} className='w-full h-64'></img>
              <div className='absolute overlay w-full h-64 top-0'></div>
            </div>
            <h1 className='text-2xl text-gray-300 px-4'>Fashion Sketching and Illustration</h1>
            <div className='p-4'>
              <p className='text-cyan-500'>Instructor: Md. Abdul Karim Molla</p>
              <p>Available Seats : 2</p>
            </div>
            <hr/>
            <div className='w-full flex justify-around items-center'>
              <p>TK. 20,000</p>
              <button className='bg-sky-500 my-5 py-1 px-2 text-white hover:bg-sky-600 uppercase'>Select Course</button>
            </div>
          </div>
          <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-white space-y-2' >
            <div className='relative'>
              <img src={img1} className='w-full h-64'></img>
              <div className='absolute overlay w-full h-64 top-0'></div>
            </div>
            <h1 className='text-2xl text-gray-300 px-4'>Fashion Sketching and Illustration</h1>
            <div className='p-4'>
              <p className='text-cyan-500'>Instructor: Md. Abdul Karim Molla</p>
              <p>Available Seats : 2</p>
            </div>
            <hr/>
            <div className='w-full flex justify-around items-center'>
              <p>TK. 20,000</p>
              <button className='bg-sky-500 my-5 py-1 px-2 text-white hover:bg-sky-600 uppercase'>Select Course</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Classes