import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import Container from '../../../components/Container/Container';
import slideImg from '../../../assets/classes/fashion.jpg'

const PopularInstructors = () => {
  return (
    <div className='bg-[#C25582]'>
      <Container>
        <div className='py-20'>
          <SectionTitle heading={'Popular Instructors'} subHeading={'Justify our comments'}></SectionTitle>
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className='relative cursor-pointer'>
                <img src={slideImg}></img>
                  <h1>Graphics Design</h1>
                  <h3>Students: 52</h3>
              </SwiperSlide>
              <SwiperSlide><img src={slideImg}></img></SwiperSlide>
              <SwiperSlide><img src={slideImg}></img></SwiperSlide>
              <SwiperSlide><img src={slideImg}></img></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default PopularInstructors