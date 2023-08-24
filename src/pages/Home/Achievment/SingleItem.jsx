import React from 'react'
import CountUp from 'react-countup';
const SingleItem = ({counterOn, start, end, duration,text}) => {
    return (
            <div className='text-center my-5 space-y-0 md:space-y-2'>
                <h1 className='md:text-5xl text-2xl font-bold'>
                    {
                        counterOn && <CountUp start={start} end={end} duration={duration}></CountUp>
                    }
                    <span className='text-yellow-800 text-3xl'>+</span></h1>
                <h2 className='md:text-2xl text-lg font-bold'>{text}</h2>
            </div>
    )
}

export default SingleItem