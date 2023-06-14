import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { Fragment, useEffect, useState } from 'react';
import 'swiper/css';
import "swiper/css/pagination";
import ContainerLayout from '../../../components/Container/ContainerLayout';
import SinglePopularInstructor from "./SinglePopularInstructor";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/instructors/topsix')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0){
          setInstructors(data);
        }
      })
  }, [])

  return (
    <div className='bg-[#C25582]'>
      <div className='py-10'>
        <SectionTitle heading={'Popular Instructors'} subHeading={'Justify our comments'}></SectionTitle>
        <ContainerLayout>
          <div className='grid lg:grid-cols-3 gap-3'>
            {
              instructors.map((instructor) =>  <SinglePopularInstructor key={instructor._id} instructor={instructor}></SinglePopularInstructor>      )
            }
          </div>
        </ContainerLayout>
      </div>

    </div>

  )
}

export default PopularInstructors