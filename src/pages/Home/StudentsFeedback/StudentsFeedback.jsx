import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Rating from 'react-rating';
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
    <div className='py-5'>
            <SectionTitle
                subHeading={'What Our Students Say'}
                heading={'Students Feedback'}
            ></SectionTitle>
            <div className="w-[70%] mx-auto">
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
                            return <SwiperSlide key={feedback._id}>
                                <div className="flex flex-col space-y-5 items-center mx-20">
                                    <img src={feedback.photo} className='w-48'></img>
                                    <p className='text-white'>{feedback.message}</p>
                                    <h1 className="text-gray-400 uppercase text-lg my-5">{feedback.name}</h1>
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