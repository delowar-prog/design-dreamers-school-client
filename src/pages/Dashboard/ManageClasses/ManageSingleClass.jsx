import { Fragment } from 'react'
import { BsSendFill } from 'react-icons/bs';
import { FcApprove, FcCancel } from "react-icons/fc";
import Swal from 'sweetalert2';
import Modal from './Modal';
const ManageSingleClass = ({ item,refetch }) => {
  const { name, image, price, available_seats, instructor_name, email,status } = item
  const token=localStorage.getItem('user_access_key')

  //Approved a class by admin
  const handleApprove = (item) => {
    console.log(item._id)
    fetch(`https://summer-camp-fashion-design-server.vercel.app/admin/approveClass/${item._id}`, {
      method: "PUT",
      headers:{
        authorization:`Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Class Approved Successfully`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  //deny a class by admin
  const handleDeny=(item)=>{
    fetch(`https://summer-camp-fashion-design-server.vercel.app/admin/denyClass/${item._id}`, {
      method: "PUT",
      headers:{
        authorization:`Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Class Denied`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  //Feedback why a class deny by admin

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
      <td>{instructor_name}</td>
      <td>{email}</td>
      <td>{available_seats}</td>
      <td>{price}</td>
      {
        status=='approved'&&<td className='text-sm text-green-500'>Approved</td>||status=='denied'&&<td className='text-sm text-red-500'>Denied</td>||<td className='text-sm text-sky-500'>Pending</td>
      }
      <td>
        <button onClick={() => handleApprove(item)} disabled={status=='approved'||status=='denied'?true:false} className={status=='approved'||status=='denied'?'opacity-50':'opacity-100'}><FcApprove className='text-3xl' title='Approve'></FcApprove></button><button onClick={() => handleDeny(item)} disabled={status=='approved'||status=='denied'?true:false} className={status=='approved'||status=='denied'?'opacity-50':'opacity-100'} title='Deny'><FcCancel className='text-3xl'></FcCancel></button>
      </td>
      <td>
      <label htmlFor="my_modal_6" className="btn"><BsSendFill title='Send feedback' ></BsSendFill></label>
      </td>
    </tr>
    
    <Modal item={item}></Modal>
        
    </Fragment> 
    
  )
}

export default ManageSingleClass