import React from 'react'
import moment from 'moment';
const SinglePayment = ({index,payment}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>{payment.transectionId}</td>
            <td>{payment.quantity}</td>
            <td>${payment.price}</td>
            <td>{moment(payment.date).format("MMM Do YY")}</td>
            <td><button className='btn btn-info btn-sm'>More Details</button></td>
        </tr>
    )
}

export default SinglePayment