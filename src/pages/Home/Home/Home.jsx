import React from 'react'
import Slider from '../Slider/Slider'
import PopularClasses from '../PopularClasses/PopularClasses'
import PopularInstructors from '../PopularInstructors/PopularInstructors'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div className='bg-pink-800'>
      <Helmet><title>SCFDS || Home</title></Helmet>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
    </div>
  )
}

export default Home