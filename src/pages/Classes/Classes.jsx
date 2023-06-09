import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { Helmet } from 'react-helmet-async'
import SingleClass from './SingleClass'

const Classes = () => {
  const [classes, setClasses]=useState([])
  //load data
  useEffect(()=>{
    fetch('http://localhost:5000/classes')
    .then(res=>res.json())
    .then(data=>setClasses(data))
  },[])

  return (
    <div className='bg-pink-600 pb-20'>
    <Helmet><title>SCFDS || Classes</title></Helmet>
      <SectionTitle heading={'Our all classes'} subHeading={'Visit to find your favorite classes'}></SectionTitle>
      <Container>
        <div className='grid grid-cols-3 gap-5'>
        {
          classes.map(item=><SingleClass key={item._id} item={item}></SingleClass>)
        }
        </div>
      </Container>
    </div>
  )
}

export default Classes