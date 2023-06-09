import React from 'react'
import Container from '../../components/Container/Container'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import img1 from '../../assets/instructors/1.jpg'
import img2 from '../../assets/instructors/2.jpg'
import img3 from '../../assets/instructors/3.jpg'
import './Instructors.css'
const Instructors = () => {
    return (
        <div className='bg-pink-600 pb-20'>
            <SectionTitle heading={'Our Instructors'} subHeading={'Join to justify us'}></SectionTitle>
            <Container>
                <div className='grid lg:grid-cols-3 gap-5'>
                    <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-center text-white space-y-2' >
                        <div className='relative'>
                            <img src={img1} className='w-full h-64'></img>
                            <div className='absolute overlay w-full h-64 top-0'></div>
                        </div>
                        <h1 className='text-center font-bold text-2xl text-pink-400 my-5 uppercase'>Md. Sharif Uddin</h1>
                        <p>Email: sharif96@gmail.com</p>
                        <p>Number of Classes : 2</p>
                        <p>Name of Classes: Fashion Sketching and Illustration</p>
                        <div className='w-full flex justify-center items-center'>
                            <button className='bg-sky-500 my-5 py-1 px-5 text-white hover:bg-sky-600 uppercase'>See the Classes</button>
                        </div>
                    </div>
                    <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-center text-white space-y-2' >
                        <div className='relative'>
                            <img src={img2} className='w-full h-64'></img>
                            <div className='absolute overlay w-full h-64 top-0'></div>
                        </div>
                        <h1 className='text-center font-bold text-2xl text-pink-400 my-5 uppercase'>Md. Sharif Uddin</h1>
                        <p>Email: sharif96@gmail.com</p>
                        <p>Number of Classes : 2</p>
                        <p>Name of Classes: Fashion Sketching and Illustration</p>
                        <div className='w-full flex justify-center items-center'>
                            <button className='bg-sky-500 my-5 py-1 px-5 text-white hover:bg-sky-600 uppercase'>See the Classes</button>
                        </div>
                    </div>
                    <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-center text-white space-y-2' >
                        <div className='relative'>
                            <img src={img3} className='w-full h-64'></img>
                            <div className='absolute overlay w-full h-64 top-0'></div>
                        </div>
                        <h1 className='text-center font-bold text-2xl text-pink-400 my-5 uppercase'>Md. Sharif Uddin</h1>
                        <p>Email: sharif96@gmail.com</p>
                        <p>Number of Classes : 2</p>
                        <p>Name of Classes: Fashion Sketching and Illustration</p>
                        <div className='w-full flex justify-center items-center'>
                            <button className='bg-sky-500 my-5 py-1 px-5 text-white hover:bg-sky-600 uppercase'>See the Classes</button>
                        </div>
                    </div>
                    <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-center text-white space-y-2' >
                        <div className='relative'>
                            <img src={img1} className='w-full h-64'></img>
                            <div className='absolute overlay w-full h-64 top-0'></div>
                        </div>
                        <h1 className='text-center font-bold text-2xl text-pink-400 my-5 uppercase'>Md. Sharif Uddin</h1>
                        <p>Email: sharif96@gmail.com</p>
                        <p>Number of Classes : 2</p>
                        <p>Name of Classes: Fashion Sketching and Illustration</p>
                        <div className='w-full flex justify-center items-center'>
                            <button className='bg-sky-500 my-5 py-1 px-5 text-white hover:bg-sky-600 uppercase'>See the Classes</button>
                        </div>
                    </div>
                    <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-center text-white space-y-2' >
                        <div className='relative'>
                            <img src={img3} className='w-full h-64'></img>
                            <div className='absolute overlay w-full h-64 top-0'></div>
                        </div>
                        <h1 className='text-center font-bold text-2xl text-pink-400 my-5 uppercase'>Md. Sharif Uddin</h1>
                        <p>Email: sharif96@gmail.com</p>
                        <p>Number of Classes : 2</p>
                        <p>Name of Classes: Fashion Sketching and Illustration</p>
                        <div className='w-full flex justify-center items-center'>
                            <button className='bg-sky-500 my-5 py-1 px-5 text-white hover:bg-sky-600 uppercase'>See the Classes</button>
                        </div>
                    </div>
                   
                </div>
            </Container>
        </div>

    )
}

export default Instructors