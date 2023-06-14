import React from 'react'
import SectionTitleDeshboard from '../../../components/SectionTitle/SectionTitleDeshboard'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import { loadStripe } from '@stripe/stripe-js'
import useSelectedClass from '../../../hooks/useSelectedClass'

const stripePromise=loadStripe('pk_test_51NIk1UFDin2JmCEP0YKl079Ee2C0fC27GmBNjBQpycGEQh4Ijr7dD1owBiXAlcDB3q2zqDXFasAm9wrFa5TyVpdU00lIE7Hwl7')
const Payment = () => {
  const [selectedClass] = useSelectedClass()
  const total=selectedClass.reduce((sum, item)=>sum+item.price,0)
  const price=parseFloat(total.toFixed(2))
  return (
    <div className='w-full'>
      <h2 className='text-3xl uppercase my-10 text-center text-pink-600 font-bold'>Payment</h2>
      <hr></hr>
      <Elements stripe={stripePromise}>
        <CheckoutForm selectedClass={selectedClass} price={price}/>
      </Elements>
    </div>
  )
}

export default Payment