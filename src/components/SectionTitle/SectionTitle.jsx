import React from 'react'

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='w-[40%] mx-auto my-14 text-center'>
            <h2 className='text-4xl text-white font-semibold uppercase py-3'>{heading}</h2>
            <p className='text-yellow-300 text-lg'>{subHeading}</p>
        </div>
    )
}

export default SectionTitle