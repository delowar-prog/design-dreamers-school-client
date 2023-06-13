import { Fragment, useContext } from "react"
import SectionTitleDeshboard from "../../../components/SectionTitle/SectionTitleDeshboard"
import { useQuery } from "@tanstack/react-query"
import Swal from "sweetalert2"
import ManageSingleClass from "./ManageSingleClass"
import useAxiosSecure from "../../../hooks/useAxiosSecure"


const ManageClassses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure(`/admin/classes`)
            return res.data
        }
    })
    return (
        <Fragment>
            <div className='w-full'>
                <SectionTitleDeshboard heading={'Manage Classes'} subHeading={''}></SectionTitleDeshboard>
            </div>
            <div className='w-[95%] mx-auto my-10'>
                <div className="overflow-x-auto w-full">
                    <h2 className="text-xl my-5 font-bold text-pink-500">Total User : {classes.length}</h2>
                    <table className="table w-full">
                        {/* head */}
                        <thead className="z-10 bg-indigo-100 sticky top-0">
                            <tr>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor</th>
                                <th>email</th>
                                <th>Avail.Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Update Status</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                classes.map((item) => <ManageSingleClass key={item._id} item={item} refetch={refetch}></ManageSingleClass>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ManageClassses