import React from 'react'
import constructionImg from '../../../assets/page-under-construction.avif'
const InstructorModal = ({ visible, handleClose, instructor }) => {
    if (!visible) return null
    return (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-lg
        flex justify-center items-center">
            <div className="bg-white p-5 rounded w-[80%] h-[80%] relative">
                <img src={constructionImg}></img>
                <button onClick={handleClose} className='text-gray-500'><div className='w-8 h-8 bg-red-900 rounded-full absolute -right-3 -top-3 flex justify-center items-center font-bold'>X</div></button>
            </div>
        </div>
    )
}

export default InstructorModal