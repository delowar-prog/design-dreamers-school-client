import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import Container from '../../../components/Container/Container';
import { Fragment, useEffect, useState } from 'react';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/instructors/topsix')
      .then(res => res.json())
      .then(data => setInstructors(data))
  }, [])
  return (
    <div className='bg-[#C25582]'>
      <Container>
        <div className='py-20'>
          <SectionTitle heading={'Popular Instructors'} subHeading={'Justify our comments'}></SectionTitle>
          <div>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              style={{paddingBottom:'40px'}}
            >
              {
                instructors.map(instructor => <Fragment key={instructor._id}>
                  <SwiperSlide className='relative cursor-pointer'>
                    <div className='instructor-items bg-[#0D0D0D] border-b-4 border-pink-400 text-center text-white space-y-2' >
                      <div className='relative'>
                        <img src={instructor.image} className='w-full h-64'></img>
                        <div className='absolute overlay w-full h-64 top-0'></div>
                      </div>
                      <h1 className='text-center font-bold text-xl text-pink-400 my-5 uppercase'>{instructor.name}</h1>
                      <p>Email: {instructor.email}</p>
                      <p>Number of Classes : {instructor.taken_class}</p>
                      <div className='w-full flex justify-center items-center'>
                        <button className='bg-sky-500 my-5 py-1 px-5 text-white hover:bg-sky-600 uppercase'>See the Classes</button>
                      </div>
                    </div>
                  </SwiperSlide>
                </Fragment>)
              }
            </Swiper>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default PopularInstructors