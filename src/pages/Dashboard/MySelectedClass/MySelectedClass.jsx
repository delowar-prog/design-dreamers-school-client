import React, { Fragment } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import SectionTitleDeshboard from '../../../components/SectionTitle/SectionTitleDeshboard'
import useSelectedClass from '../../../hooks/useSelectedClass'
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';
import axios from 'axios';

const MySelectedClass = () => {
  const [selectedClass,refetch] = useSelectedClass()
  const totalCost=selectedClass.reduce((sum,item)=>item.price+sum,0)

  const handleDeleteClass=item=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "Delete This Selected Class!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       fetch(`http://localhost:5000/selected/classes/${item._id}`,
       {
        method:"DELETE",
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.deletedCount>0){
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          refetch()
        }
       })
      }
    })
  }
 
  return (
    <Fragment>
      <div className='w-full'>
        <SectionTitleDeshboard heading={'My Selected Classes'} subHeading={'Whats imaging'}></SectionTitleDeshboard>
      </div>
      <div className='w-[75%] mx-auto my-10'>
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead className='text-gray-600 text-md uppercase text-indigo-700'>
              <tr>
                <th>Sl</th>
                <th>Class Title</th>
                <th>Instructor Name</th>
                <th>Cost as Fee</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                selectedClass.map((item,index) =><Fragment key={item._id}>
                  <tr>
                    <th>{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.instructor_name}</td>
                    <td>$ {item.price}</td>
                    <td><button onClick={()=>handleDeleteClass(item)} className='btn btn-primary btn-sm'><FaTrash className='text-lg text-red-500'></FaTrash></button></td>
                  </tr>
                </Fragment>)
              }
            </tbody>
          </table>
        </div>
        <br></br>
        <hr className='border border-gray-300'></hr>
        <div className='w-[40%] space-y-3 border border-gray-400 rounded p-5 my-5 float-right'>
          <h2 className='text-xl'>Total Selected Class : {selectedClass.length} </h2>
          <h2 className='text-xl'>Total Cost : $ {totalCost}</h2>
          <button className='btn btn-success'>Pay Now</button>
        </div>
      </div>
    </Fragment>
  )
}

export default MySelectedClass