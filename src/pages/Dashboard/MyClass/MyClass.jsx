import SectionTitleDeshboard from '../../../components/SectionTitle/SectionTitleDeshboard'
import useMyAddedClass from '../../../hooks/useMyAddedClass'
import MySingleClass from './MySingleClass'
import { Helmet } from 'react-helmet-async'

const MyClass = () => {
 const [myAddedClass]=useMyAddedClass()
 console.log(myAddedClass)
    return (
        <div className='w-full'>
        <Helmet><title>SCFDS || Dashboard | ManageUser</title></Helmet>
            <div className='w-full'>
                <SectionTitleDeshboard heading={'My Added Classes'} subHeading={''}></SectionTitleDeshboard>
            </div>
            <div className='w-[95%] mx-auto my-10'>
                <div className="overflow-x-auto w-full">
                    <h2 className="text-xl my-5 font-bold text-pink-500">Your total added classes : {myAddedClass.length} </h2>
                    <table className="table w-full">
                        {/* head */}
                        <thead className="z-10 bg-indigo-100 sticky top-0">
                            <tr>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Enroll Students</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Feedback</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            myAddedClass.map(myClass=><MySingleClass key={myClass._id} myClass={myClass}></MySingleClass>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyClass