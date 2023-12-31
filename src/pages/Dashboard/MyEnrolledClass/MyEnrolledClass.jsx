import { Fragment, useEffect, useState } from 'react'
import SectionTitleDeshboard from '../../../components/SectionTitle/SectionTitleDeshboard'
import useAuth from '../../../hooks/useAuth'

const MyEnrolledClass = () => {
    const { user, loading } = useAuth()
    const [enrollClass, setEnrollClass] = useState([])

    useEffect(() => {
        fetch(`https://summer-camp-fashion-design-server.vercel.app/enroll/classes/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    console.log(data)
                    setEnrollClass(data);
                }
            })
    }, [user])

    return (
        <Fragment>
            <div className='w-full'>
                <SectionTitleDeshboard heading={'My Enrolled Classes'} subHeading={''}></SectionTitleDeshboard>
            </div>
            <div className='w-[60%] mx-auto my-10'>
                <div className="overflow-x-auto w-full">
                    <h2 className="text-xl my-5 font-bold text-pink-500">Total Enrolled Classes : </h2>
                    <table className="table w-full">
                        {/* head */}
                        <thead className="z-10 bg-indigo-100 sticky top-0">
                            <tr>
                                <th>Class Id</th>
                                <th>Class Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                             enrollClass.map((item, i)=>{
                               return <tr key={i}>
                                        <td>{item.price}</td>
                                        <td>{item.cartItem}</td>
                                      </tr> 
                             })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default MyEnrolledClass