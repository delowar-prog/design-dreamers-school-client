import React from 'react'
import SectionTitleDeshboard from '../../../components/SectionTitle/SectionTitleDeshboard'
import { Helmet } from 'react-helmet-async'

const DashboardHome = () => {
  return (
    <div className='w-full'>
    <Helmet><title>SCFDS || Dashboard | Home</title></Helmet>
      <div className='w-full'>
        <SectionTitleDeshboard heading={'Dashboard Home'} subHeading={''}></SectionTitleDeshboard>
      </div>
      <div>
          <h1 className='text-5xl text-center my-5 text-pink-500'>Welcome to Dashboard Page</h1>
          <h2 className='text-2xl text-center'>Page Under constructions</h2>
      </div>
    </div>
  )
}

export default DashboardHome