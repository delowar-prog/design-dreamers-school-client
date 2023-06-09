import React from 'react'

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='w-[40%] mx-auto py-14 text-center'>
            <h2 className='font-serif text-2xl text-white font-semibold uppercase py-3'>{heading}</h2>
            <p className='text-yellow-300 text-2xl' style={{fontFamily:"Dancing Script"}}>{subHeading}</p>
        </div>
    )
}

export default SectionTitle