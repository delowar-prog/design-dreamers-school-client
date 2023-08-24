import React from 'react'
import BlogImg from '../../assets/classes/5.jpg'
const BlogBody = () => {
  return (
    <div className='blog-body w-[70%]'>
        <div className='singleBlog'>
          <img src={BlogImg} className='mt-2 w-[100%] h-96 rounded-lg'></img>
          <div className=''>
            <div>
            <h1 className='text-xl uppercase text-white mt-5'>Blog Title Will Be here</h1>
            <ul className='flex gap-8 text-yellow-300'>
              <li>Admin</li>
              <li>Education</li>
              <li>Aug 25, 2023</li>
            </ul>
            </div>
          </div>
          <div className='mt-5'>
            <p className='text-gray-400 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam officiis cupiditate ad iusto aliquam accusamus distinctio velit minus. Architecto maxime voluptatem facere mollitia voluptatum doloremque ut beatae. At, dignissimos!.... <span className='cursor-pointer  font-bold'>Read More</span></p>
            </div>
        </div>        
    </div>
  )
}

export default BlogBody