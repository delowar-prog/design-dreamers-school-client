import React from 'react'
import { Helmet } from 'react-helmet-async'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import BlogBody from './BlogBody'
import BlogSidebar from './BlogSidebar'

const Blogs = () => {
    return (
        <div className='bg-pink-800 px-20 pb-14'>
            <Helmet><title>SCFDS || Blogs</title></Helmet>
            <SectionTitle heading={'Blogs'} subHeading={''}></SectionTitle>
            <div className='flex justify-between gap-14'>
                <BlogBody></BlogBody>
                <BlogSidebar></BlogSidebar>
            </div>
        </div>
    )
}

export default Blogs