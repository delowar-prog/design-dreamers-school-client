import React from 'react'
import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs'
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaWifi } from 'react-icons/fa';
const ContactInfo = () => {
    return (
        <div className='mb-10 w-[35%]'>
            <div className='mb-10'>
                <h1 className='text-xl uppercase font-bold text-gray-300 mb-5'>Contact Info</h1>
                <ul className='text-yellow-300 space-y-2'>
                    <li className='flex gap-2 items-center'> <BsFillTelephoneFill></BsFillTelephoneFill> +88 01738118205</li>
                    <li className='flex gap-2 items-center'> <BsFillEnvelopeFill></BsFillEnvelopeFill> scfds@gmail.com</li>
                    <li className='flex gap-2 items-center'> <CiLocationOn className='text-2xl'></CiLocationOn> House 09, Road 32, Mohammadpur,
                        Dhaka-1200, UK</li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl uppercase font-bold text-white mb-5'>Social Media</h1>
                <ul className='flex gap-3 text-yellow-500'>
                    <li className='cursor-pointer'><FaFacebookF></FaFacebookF></li>
                    <li className='cursor-pointer'><FaWifi></FaWifi> </li>
                    <li className='cursor-pointer'><FaGooglePlusG></FaGooglePlusG></li>
                    <li className='cursor-pointer'><FaInstagram></FaInstagram></li>
                    <li className='cursor-pointer'><FaLinkedinIn></FaLinkedinIn></li>
                </ul>
            </div>
        </div>
    )
}

export default ContactInfo