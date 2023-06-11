import { Fragment } from "react"
import SectionTitleDeshboard from "../../../components/SectionTitle/SectionTitleDeshboard"
import { useQuery } from "@tanstack/react-query"
import Swal from "sweetalert2"
import useAxiosSecure from "../../../hooks/useAxiosSecure"

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const token=localStorage.getItem('user_access_key')
    const { data: users = [], refetch } = useQuery(['alluser'], async () => {
        const res = await axiosSecure(`/users`)
        return res.data
    })

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <Fragment>
            <div className='w-full'>
                <SectionTitleDeshboard heading={'Manage user'} subHeading={''}></SectionTitleDeshboard>
            </div>
            <div className='w-[80%] mx-auto my-10'>
                <div className="overflow-x-auto w-full">
                    <h2 className="text-xl my-5 font-bold text-pink-500">Total User : {users.length}</h2>
                    <table className="table">
                        {/* head */}
                        <thead className='text-gray-600 text-md uppercase text-indigo-700'>
                            <tr>
                                <th>Sl</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>User Roll</th>
                                <th>Make</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <Fragment key={user._id}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td><p className="bg-indigo-500 text-gray-200 text-center rounded-xl">{user?.role || 'Students'}</p></td>
                                        <td><button onClick={() => handleMakeInstructor(user)} className='btn btn-primary btn-xs' disabled={user?.role === 'instructor' ? true : false}>Instructor</button>|<button onClick={() => handleMakeAdmin(user)} className='btn btn-success btn-xs' disabled={user?.role === 'admin' ? true : false}>Admin</button></td>
                                    </tr>
                                </Fragment>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ManageUser