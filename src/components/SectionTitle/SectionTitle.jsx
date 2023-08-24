import React from 'react'
import { Fade, Bounce,Slide } from "react-awesome-reveal";
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <Slide triggerOnce={true}>
            <div className='w-full md:w-[40%] mx-auto py-14 text-center'>
                <Bounce triggerOnce={true}>
                    <h2 className='font-serif text-xl md:text-2xl font-semibold uppercase py-3'>{heading}</h2>
                    <p className='text-2xl text-cyan-800' style={{ fontFamily: "Dancing Script" }}>{subHeading}</p>
                </Bounce>
            </div>
        </Slide>

    )
}

export default SectionTitle