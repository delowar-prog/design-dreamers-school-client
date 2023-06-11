import { Fragment } from "react"
import SectionTitleDeshboard from "../../../components/SectionTitle/SectionTitleDeshboard"
import { FaTrash } from "react-icons/fa"
import { useQuery } from "@tanstack/react-query"

const ManageUser = () => {
    const { data: users = [], refetch } = useQuery(['alluser'], async () => {
        const res = await fetch(`http://localhost:5000/users`)
        return res.json()
    })
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
                                users.map((user,index) => <Fragment key={user._id}>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td><p className="bg-indigo-500 text-gray-200 text-center rounded-xl">{user?.role || 'Students'}</p></td>
                                        <td><button onClick={''} className='btn btn-primary btn-sm'>Instructor</button>|<button onClick={''} className='btn btn-success btn-sm'>Admin</button></td>
                                        
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