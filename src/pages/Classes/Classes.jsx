import React, { useContext, useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { Helmet } from 'react-helmet-async'
import SingleClass from './SingleClass'
import { AuthContext } from '../../provider/authProvider'
import Swal from 'sweetalert2'

const Classes = () => {
  const [classes, setClasses]=useState([])
  const {user}=useContext(AuthContext)
  //load data
  useEffect(()=>{
    fetch('http://localhost:5000/classes')
    .then(res=>res.json())
    .then(data=>setClasses(data))
  },[])

  const handleSelectClass=(item)=>{
    const {_id,image,name,price,instructor_name}=item
    if(!user){
      Swal.fire({
        title: 'Login to select class',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }else{
        const selectedClass={classId:_id,image,name,instructor_name,price,email:user?.email} 
        fetch(`http://localhost:5000/selected/classes`,{
          method:'POST',
          headers:{
            'content-type':'Application/json'
          },
          body:JSON.stringify(selectedClass) 
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'This class selected successfully',
              showConfirmButton: false,
              timer: 2000
            })
          }
        })

    }
  }
  return (
    <div className='bg-pink-600 pb-20'>
    <Helmet><title>SCFDS || Classes</title></Helmet>
      <SectionTitle heading={'Our all classes'} subHeading={'Visit to find your favorite classes'}></SectionTitle>
      <Container>
        <div className='grid grid-cols-3 gap-5'>
        {
          classes.map(item=><SingleClass key={item._id} item={item} handleSelectClass={handleSelectClass}></SingleClass>)
        }
        </div>
      </Container>
    </div>
  )
}

export default Classes