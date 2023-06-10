import React, { Fragment } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import SectionTitleDeshboard from '../../../components/SectionTitle/SectionTitleDeshboard'

const MySelectedClass = () => {
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
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Delete</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>Delete</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Delete</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <hr className='border border-gray-300'></hr>
        <div className='w-[30%] space-y-3 border border-gray-400 rounded p-5 my-5 float-right'>
            <h2 className='text-xl'>Total Selected Class : </h2>
            <h2 className='text-xl'>Total Cost : </h2>
            <button className='btn btn-error'>Pay Now</button>
        </div>
      </div>
    </Fragment>
  )
}

export default MySelectedClass