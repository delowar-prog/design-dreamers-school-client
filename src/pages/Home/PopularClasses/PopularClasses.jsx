import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import ContainerLayout from '../../../components/Container/ContainerLayout'
import './PopularClasses.css'
import { useEffect, useState } from 'react'
import PopularSingleClass from './PopularSingleClass'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import Swal from 'sweetalert2'

const PopularClasses = () => {
  const [classes, setClasses] = useState([])
  const {user}=useAuth()
  useEffect(()=>{
    fetch('https://summer-camp-fashion-design-server.vercel.app/classes/topsix')
    .then(res=>res.json())
    .then(data=>{
      if(data.length>0){
        setClasses(data)
      }
    })
  },[])
  const handleSelectClass=(classItem)=>{
    const {_id,image,name,price,instructor_name}=classItem
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
        const token=localStorage.getItem('access-token')
        fetch(`https://summer-camp-fashion-design-server.vercel.app/selected/classes`,{
          method:'POST',
          headers:{
            'content-type':'Application/json',
            authorization:`Bearer ${token}`
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
    <ContainerLayout>
      <div>
        <SectionTitle heading={'Popular Courses'} subHeading={'See details about our popular classes'}></SectionTitle>
        <div className='my-10 grid lg:grid-cols-4 gap-8'>
          {
            classes.map(classItem => <PopularSingleClass key={classItem._id} handleSelectClass={handleSelectClass} classItem={classItem}></PopularSingleClass>)
          }
        </div>
        <div className='flex justify-center items-center mb-5'>
          <Link to={'/classes'}><button className='text-cyan-800 uppercase font-bold border-b border-cyan-800 border-b-2 p-2 rounded-3xl hover:bg-cyan-800 hover:text-white transition-all duration-300 ease-in'>View All Classes</button></Link>
        </div>
      </div>
    </ContainerLayout>
  )
}

export default PopularClasses