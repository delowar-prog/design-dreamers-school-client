import React from 'react'
import featuredBlog from '../../assets/classes/4.jpg'
const FeaturedBlog = () => {
    return (
        <div>
            <h1 className='text-white text-lg uppercase font-bold my-3'>Featured Blogs</h1>
            <div className='flex items-start gap-3 my-3'>
                <div>
                    <img src={featuredBlog} className='w-48'></img>
                </div>
                <div>
                    <h3 className='text-md text-gray-200 font-bold'>Blog Heading</h3>
                    <p className='text-black'>Lorem ipsum dolor sit amet elit. Doloremque...</p>
                </div>
            </div>
            <div className='flex items-start gap-3 my-3'>
                <div>
                    <img src={featuredBlog} className='w-48'></img>
                </div>
                <div>
                    <h3 className='text-md text-gray-200 font-bold'>Blog Heading</h3>
                    <p className='text-black'>Lorem ipsum dolor sit amet elit. Doloremque...</p>
                </div>
            </div>
            <div className='flex items-start gap-3 my-3'>
                <div>
                    <img src={featuredBlog} className='w-48'></img>
                </div>
                <div>
                    <h3 className='text-md text-gray-200 font-bold'>Blog Heading</h3>
                    <p className='text-black'>Lorem ipsum dolor sit amet elit. Doloremque...</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlog