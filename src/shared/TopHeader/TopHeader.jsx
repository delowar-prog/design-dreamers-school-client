import { IoLocationOutline } from 'react-icons/io5';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
const TopHeader = () => {
    const { user, logoutUser } = useAuth()
    const handleLogout = () => {
        logoutUser().then(() => { })
            .catch(error => console.log(error.message))
    }
    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-2 bg-[#3B5998] px-3 md:px-24'>
            <div className='flex flex-col justify-center md:flex-row gap-3 text-white'>
                <div className='flex items-center gap-1'>
                    <IoLocationOutline className='text-xl'></IoLocationOutline>
                    <p>Gause Pak Bhaban, CA, Dhaka-1000</p>
                </div>
                <div className='flex items-center gap-1'>
                    <FaPhoneAlt className='text-xl'></FaPhoneAlt>
                    <p>+1 000 123 1234; +1 000 567 5678</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <div className='flex justify-center items-center w-7 h-7 bg-gray-300 hover:cursor-pointer hover:bg-gray-200 rounded-full'>
                    <FaFacebookF className='text-blue-500'></FaFacebookF>
                </div>
                <div className='flex justify-center items-center w-7 h-7 bg-gray-300 hover:cursor-pointer hover:bg-gray-200 rounded-full'>
                    <FaLinkedinIn className='text-sky-500'></FaLinkedinIn>
                </div>
                <div className='flex justify-center items-center w-7 h-7 bg-gray-300 hover:cursor-pointer hover:bg-gray-200 rounded-full'>
                    <FaTwitter className='text-indigo-700'></FaTwitter>
                </div>
                <div className='flex justify-center items-center w-7 h-7 bg-gray-300 hover:cursor-pointer hover:bg-gray-200 rounded-full'>
                    <FaYoutube className='text-red-800'></FaYoutube>
                </div>
            </div>
            <div className=''>
                {
                    user ? <Fragment>
                        <div className='flex gap-3 items-center'>
                        <li className='list-none text-white'><Link to="/dashboard/home" className='hover:bg-inherit'>Dashboard</Link></li>
                        <li className='list-none text-white'><button type='submit' onClick={handleLogout}>Logout</button></li>
                            <li className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={user.photoUrl} title={'Profile Pic'} />
                                    </div>
                                </label>
                            </li>
                        </div>
                    </Fragment> 
                    : 
                    <ul className='list-none flex text-white gap-5'>
                    <li><Link to="/register" className='hover:bg-inherit'>Sign up</Link></li>
                    <li><Link to="/login" className='hover:bg-inherit'>Login</Link></li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default TopHeader