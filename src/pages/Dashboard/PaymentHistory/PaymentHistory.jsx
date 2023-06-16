import React, { Fragment, useContext, useEffect, useState } from 'react'
import SectionTitleDeshboard from '../../../components/SectionTitle/SectionTitleDeshboard'
import { AuthContext } from '../../../Provider/AuthProvider'
import SinglePayment from './SinglePayment'

const PaymentHistory = () => {
    const { user, loading } = useContext(AuthContext)
    const [payments, setPayments] = useState([])

    useEffect(() => {
        fetch(`https://summer-camp-fashion-design-server.vercel.app/payment/history/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setPayments(data);
                }
            })
    }, [])
  return (
    <Fragment>
            <div className='w-full'>
                <SectionTitleDeshboard heading={'Payment History'} subHeading={''}></SectionTitleDeshboard>
            </div>
            <div className='w-[80%] mx-auto my-10'>
                <div className="overflow-x-auto w-full">
                    <h2 className="text-xl my-5 font-bold text-pink-500">Total Payment Times : 3</h2>
                    <table className="table w-full">
                        {/* head */}
                        <thead className="z-10 bg-indigo-100 sticky top-0">
                            <tr>
                                <th>Sl</th>
                                <th>Transection Id</th>
                                <th>Items Quantity</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                payments.map((payment,index)=><SinglePayment key={payment._id} index={index} payment={payment}></SinglePayment>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
  )
}

export default PaymentHistory