import React from 'react'
import Slider from '../Slider/Slider'
import PopularClasses from '../PopularClasses/PopularClasses'
import PopularInstructors from '../PopularInstructors/PopularInstructors'

const Home = () => {
  return (
    <div className='bg-pink-800'>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
    </div>
  )
}

export default Home