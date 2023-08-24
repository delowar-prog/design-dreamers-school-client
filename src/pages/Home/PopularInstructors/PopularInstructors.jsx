import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { Fragment, useEffect, useState } from 'react';
import 'swiper/css';
import "swiper/css/pagination";
import ContainerLayout from '../../../components/Container/ContainerLayout';
import SinglePopularInstructor from "./SinglePopularInstructor";
import { Link } from "react-router-dom";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([])
  useEffect(() => {
    fetch('https://summer-camp-fashion-design-server.vercel.app/instructors/topsix')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setInstructors(data)
        }
      })
  }, [])
  return (
    <div className='bg-gray-200'>
      <div className='py-10'>
        <SectionTitle heading={'Popular Instructors'} subHeading={'Justify our comments'}></SectionTitle>
        <ContainerLayout>
          <div className='grid lg:grid-cols-4 gap-8'>
            {
              instructors.map((instructor) => <SinglePopularInstructor key={instructor._id} instructor={instructor}></SinglePopularInstructor>)
            }
          </div>
          <div className='flex justify-center items-center my-5'>
            <Link to={'/instructors'}><button className='text-cyan-800 uppercase font-bold border-b border-cyan-800 border-b-2 p-2 rounded-3xl hover:bg-cyan-800 hover:text-white transition-all duration-300 ease-in'>View All Instructors</button></Link>
          </div>
        </ContainerLayout>
      </div>
      
    </div>

  )
}

export default PopularInstructors