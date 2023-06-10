import React from 'react'

const SectionTitleDeshboard = ({ heading, subHeading }) => {
    return (
        <>
            <div className='w-full bg-indigo-700 mx-auto py-5 text-center'>
                <h2 className='font-serif text-2xl text-gray-400 font-semibold uppercase py-3'>{heading}</h2>
                <p className='text-pink-700 text-2xl' style={{ fontFamily: "Dancing Script" }}>{subHeading}</p>
            </div>
            <hr></hr>
        </>
    )
}

export default SectionTitleDeshboard