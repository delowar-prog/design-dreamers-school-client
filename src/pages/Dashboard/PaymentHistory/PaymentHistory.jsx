import React, { Fragment, useEffect, useState } from 'react'
import SectionTitleDeshboard from '../../../components/SectionTitle/SectionTitleDeshboard'
import SinglePayment from './SinglePayment'
import { Helmet } from 'react-helmet-async'
import useAuth from '../../../hooks/useAuth'

const PaymentHistory = () => {
    const { user, loading } = useAuth()
    const [payments, setPayments] = useState([])
    const token= localStorage.getItem('access-token')
    useEffect(() => {
        fetch(`https://summer-camp-fashion-design-server.vercel.app/payment/${user?.email}`,{
            method:'GET',
            headers:{
                authorization:`Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setPayments(data);
                }
            })
    }, [])
  return (
    <Fragment>
    <Helmet><title>SCFDS || Dashboard | Payment-History</title></Helmet>
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