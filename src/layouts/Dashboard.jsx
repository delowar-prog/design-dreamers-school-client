import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { GrSelect } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { MdOutlineClass } from "react-icons/md";
import { FcManager } from "react-icons/fc";
import Header from "../shared/Header/Header"
const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-indigo-600">
                <div className='bg-gray-700'>
                    <h3 className='text-xl text-center font-bold text-white p-9'>Summer Camp <br></br>Fashion Design School</h3>
                </div>
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <h1 className='text-xl text-gray-300 uppercase font-bold text-center my-5'>Dashboard</h1>
                <ul className="menu p-4 w-64 h-full text-base-content text-lg">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/myClass"><GrSelect></GrSelect> My Selected Classes</NavLink></li>
                    <li><NavLink to="/dashboard/home"><IoIosApps></IoIosApps> My Enroll Classes</NavLink></li>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/instructors"><FcManager className='text-lg'></FcManager> Instructors</NavLink></li>
                    <li><NavLink to="/classes"><MdOutlineClass></MdOutlineClass> Classes</NavLink></li>
                </ul>

            </div>
        </div>
    )
}

export default Dashboard