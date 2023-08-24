import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import Map from './Map'

const Contact = () => {
    return (
        <Fragment>
        <div className='bg-pink-800 px-28 pb-14'>
            <Helmet><title>SCFDS || Contact</title></Helmet>
            <SectionTitle heading={'Contact Us'} subHeading={'To connect with us please send message'}></SectionTitle>
            <div className='flex gap-20 mt-10'>
                    <ContactInfo></ContactInfo>
                    <ContactForm></ContactForm>
            </div>
        </div>
        <Map></Map>
        </Fragment>
    )
}

export default Contact