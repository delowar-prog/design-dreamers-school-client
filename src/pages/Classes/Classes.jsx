import React, { useEffect, useState } from 'react'
import ContainerLayout from '../../components/Container/ContainerLayout'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { Helmet } from 'react-helmet-async'
import SingleClass from './SingleClass'
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth'


const Classes = () => {
  const [classes, setClasses] = useState([])
  const { user } = useAuth()
  useEffect(() => {
    fetch('https://summer-camp-fashion-design-server.vercel.app/classes')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setClasses(data)
        }
      })
  }, [])

  const handleSelectClass = (item) => {
    const { _id, image, name, price, instructor_name } = item
    if (!user) {
      Swal.fire({
        title: 'Login to select class',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    } else {
      const selectedClass = { classId: _id, image, name, instructor_name, price, email: user?.email }
      const token = localStorage.getItem('access-token')
      fetch(`https://summer-camp-fashion-design-server.vercel.app/selected/classes`, {
        method: 'POST',
        headers: {
          'content-type': 'Application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(selectedClass)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
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
    <div className='pb-20'>
      <Helmet><title>SCFDS || Classes</title></Helmet>
      <SectionTitle heading={'Our all classes'} subHeading={'Visit to find your favorite classes'}></SectionTitle>
      <ContainerLayout>
        <div className='grid grid-cols-4 gap-5'>
          {
            classes.map(item => <SingleClass key={item._id} item={item} handleSelectClass={handleSelectClass}></SingleClass>)
          }
        </div>
      </ContainerLayout>
    </div>
  )
}

export default Classes