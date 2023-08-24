import React, { Fragment, useEffect, useState } from 'react'
import EventImg from '../../../assets/upcoming-event-img.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import axios from 'axios';
import "swiper/css";
import "swiper/css/navigation";
import 'animate.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Slide } from "react-awesome-reveal";
import EventsItem from './EventsItem';

const UpcommingEvents = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        axios.get('event.json')
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, [])
    const slideGroups = [];
    for (let i = 0; i < events.length; i += 2) {
        slideGroups.push(events.slice(i, i + 2));
    }
    return (

        <div className='py-10'>
            <SectionTitle subHeading={'Join to our upcoming events'} heading={'Upcoming Events'}></SectionTitle>
            <div className="flex flex-col md:flex-row m-2 md:m-10 gap-8">
                <Slide triggerOnce={true} className='w-full md:w-[50%]'>
                    <div className='relative'>
                        <img src={EventImg} className='w-full rounded-xl'></img>
                        <div className='absolute top-[2%] left-[2%] md:top-[15%] md:left-[15%] w-[95%] h-[95%] md:w-[70%] md:h-[70%] rounded backdrop-blur bg-gray-100/50'>
                            <div className='w-[50%] md:w-[35%] bg-red-300 m-3 p-2 text-center rounded'><p className='text-yellow-900 font-bold'>Sep 25, 2023</p></div>
                            <div className='mx-3 my-5'>
                                <h1 className='text-md md:text-2xl my-2 text-current'>Event Heading</h1>
                                <p className='text-sm text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nihil maiores fugit, temporibus est alias quidem hic illo doloribus nostrum?</p>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide triggerOnce={true} direction="right" className='w-full md:w-[50%] animate__animated animate__lightSpeedInRight'>
                    <div>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{delay: 2000,disableOnInteraction: false}}
                            loop={true}
                            navigation={false}
                            modules={[Autoplay, Navigation,]}
                            className="mySwiper">
                            {
                            slideGroups.map((slideEvents, index) => (
                                <SwiperSlide key={index} className='mt-8'>
                                    {slideEvents.map((event, i) => <EventsItem key={event.event_name} event={event} i={i}></EventsItem>)}
                                </SwiperSlide>
                            ))
                            }
                        </Swiper>
                    </div>
                </Slide>
            </div>
        </div>

    )
}

export default UpcommingEvents