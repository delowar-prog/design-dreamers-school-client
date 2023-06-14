import React, { Fragment } from 'react'
import { BsPencil } from 'react-icons/bs';
const MySingleClass = ({myClass}) => {
    const { name, image, price, status,feedback } = myClass
  return (
    <Fragment>
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        {name}
      </td>
      <td>{Math.round(Math.random(10)*10)}</td>
      <td>{price}</td>
      <td><p className='bg-indigo-300 text-center text-cyan-500 rounded-xl'>{status?status:'Pending'}</p></td>
      <td>{status!=='approved'||status!==true||feedback?feedback:'This class is not granted to our management'}</td>
      <td>
        <button onClick="" className='btn btn-primary btn-sm'> <BsPencil></BsPencil> </button>
      </td>
    </tr>
    </Fragment> 
  )
}

export default MySingleClass