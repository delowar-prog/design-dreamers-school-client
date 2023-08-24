import banner from '../../../assets/banner.jpg'
import './Achievment.css'
import { SiCodechef } from "react-icons/si";
import { BsAwardFill } from 'react-icons/bs';
import { GiLightningBranches } from "react-icons/gi";
import { ImManWoman } from "react-icons/im";
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import SingleItem from './SingleItem';

const Achievment = () => {
    const [counterOn, setCounterOn] = useState(false)

    return (
        <div className='relative'>
            <img src={banner} className='w-full h-[350px] md:h-[300px]' alt="" />
            <ScrollTrigger onEnter={() => setCounterOn(true)} >
                <div className='achievment-overlay w-full h-full grid grid-cols-2 md:grid-cols-4'>
                    <div className='text-white flex flex-col justify-center items-center'>
                        <BsAwardFill className='text-yellow-200 text-3xl md:text-7xl'></BsAwardFill>
                        <SingleItem counterOn={counterOn} start={0} end={10} duration={5} text={'Award Wins'}></SingleItem>
                    </div>
                    <div className='text-white flex flex-col justify-center items-center'>
                        <SiCodechef className='text-yellow-200 text-3xl md:text-7xl'></SiCodechef>
                        <SingleItem counterOn={counterOn} start={0} end={20} duration={5} text={'Total Instructors'}></SingleItem>
                    </div>
                    <div className='text-white flex flex-col justify-center items-center'>
                        <ImManWoman className='text-yellow-200 text-3xl md:text-7xl'></ImManWoman>
                        <SingleItem counterOn={counterOn} start={20} end={3000} duration={5} text={'Total Students'}></SingleItem>
                    </div>
                    <div className='text-white flex flex-col justify-center items-center'>
                        <GiLightningBranches className='text-yellow-200 text-3xl md:text-7xl'></GiLightningBranches>
                        <SingleItem counterOn={counterOn} start={0} end={50} duration={5} text={'Courses'}></SingleItem>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    )
}
export default Achievment