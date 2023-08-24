import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const StudentsFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch(`feedback.json`)
            .then(res => res.json())
            .then(data => {
                if(data.length>0){
                    setFeedbacks(data)
                }
            })
    }, [])

  return (
    <div className='bg-gray-200 py-5'>
            <SectionTitle
                subHeading={'What Our Students Say'}
                heading={'Students Feedback'}
            ></SectionTitle>
            <div className="w-full md:w-[70%] mx-auto">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        feedbacks.map(feedback => {
                            return <SwiperSlide key={feedback.email}>
                                <div className="flex flex-col space-y-1 items-center mx-2 md:mx-20">
                                    <img src={feedback.photo} className='w-48'></img>
                                    <h1 className="text-cyan-800 uppercase text-sm md:text-lg">{feedback.name}</h1>
                                    <p className='text-sm md:text-md lg:text-lg text-center'>{feedback.message}</p>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
  )
}

export default StudentsFeedback