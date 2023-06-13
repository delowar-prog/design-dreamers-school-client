import React from 'react'
import SectionTitleDeshboard from '../../../components/SectionTitle/SectionTitleDeshboard'

const DashboardHome = () => {
  return (
    <div className='w-full'>
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