import React from 'react'
import Slider from '../Slider/Slider'
import PopularClasses from '../PopularClasses/PopularClasses'
import PopularInstructors from '../PopularInstructors/PopularInstructors'
import { Helmet } from 'react-helmet-async'
import StudentsFeedback from '../StudentsFeedback/StudentsFeedback'
import Achievment from '../Achievment/Achievment'
import UpcommingEvents from '../UpcommingEvents/UpcommingEvents'

const Home = () => {
  return (
    <div className=''>
      <Helmet><title>SCFDS || Home</title></Helmet>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Achievment></Achievment>
      <UpcommingEvents></UpcommingEvents>
      <StudentsFeedback></StudentsFeedback>
    </div>
  )
}

export default Home