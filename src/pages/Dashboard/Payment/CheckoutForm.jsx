import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import useAuth from '../../../hooks/useAuth'

const CheckoutForm = ({selectedClass,price}) => {
    const {user}=useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transectionId, setTransectionId]=useState('')
    const [processing, setProcessing]=useState(false)

    useEffect(() => {
      if(price>0){
        axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
      }
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('payment', paymentMethod)
        }
        setProcessing(true)
        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email:user?.email||'Unknown',
                        name:user?.displayName||'Unknown'
                    },
                },
            },
        );
        if(confirmError){
            setCardError(confirmError)
            console.log(confirmError)
        }
        console.log(paymentIntent)
        setProcessing(false)
        if(paymentIntent.status=='succeeded'){
            setTransectionId(paymentIntent.id)
            const payment={
                email:user?.email,
                transectionId:paymentIntent.id,
                price,
                date:new Date(),
                quantity:selectedClass?.length,
                cartItems:selectedClass.map(item=>item._id),
                classesId:selectedClass.map(item=>item.classId),
                classesName:selectedClass.map(item=>item.name),
                status:'Pending'
            }
            axiosSecure.post('/payment', payment)
            .then(res=>{
                if(res.data.insertResult.insertedId){
                    console.log('inserted successfully')
                }
            })
        }
    }

    return (
        <div className='w-[60%] mx-auto my-10 border p-5 border-pink-400 rounded'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className=' btn btn-primary btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret||processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500 my-5'>{cardError}</p>
            {
                transectionId && <p className='text-green-500 my-5'>Transection completed with transection_id {transectionId}</p>
            }
        </div>
    )
}

export default CheckoutForm