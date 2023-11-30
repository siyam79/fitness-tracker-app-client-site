import  { useState, useEffect} from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';


const CheckoutForm = ({ salary, trainerId }) => {
    console.log(trainerId);
    const axiosSecure = useAxiosSecure()
    const [error, setError] = useState('');
    const stripe = useStripe();
    const navigate = useNavigate()
    const [transactionId, setTransactionId] = useState('');
    const {user} = useAuth()
    console.log(user.email);

    const [clientSecret, setClientSecret] = useState();
    const elements = useElements();

    useEffect(() => {
        const handlePaymentIntent = async () => {
            try {
                const parsedSalary = parseFloat(salary);
                if (isNaN(parsedSalary)) {
                    console.error('Invalid salary:', salary);
                    return;
                }

                const response = await axios.post('http://localhost:5000/create-payment-intent', {
                    price: parsedSalary,
                    trainerId
                });

                setClientSecret(response.data.clientSecret);
                console.log('Client Secret:', response.data.clientSecret);
            } catch (error) {
                console.error('Error creating payment intent:', error);
            }
        };

        handlePaymentIntent();
    }, [salary, trainerId]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('payment method', paymentMethod);
            setError('');
        }

        // confirm card payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
        payment_method: {
            card: card,
            billing_details: {
                // name: user?.displayName || 'anonymous',
                // email: user?.email || 'anonymous'

                }
            }
        })
        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded')
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id)
if (paymentIntent) {
    axiosSecure.patch(`/user?id=${trainerId}`)
    .then(res => {
        console.log(res.data);
        if (res.data?.modifiedCount > 0) {
            toast.success('Payment Success Full', {
                position: 'top-center'

            })
            setTimeout(() => {
                navigate('/dashboard/paymentHistory')
            }, 1000);
    
        }
    })
}


//  data base payment history add 


            const payment = {
                email: user?.email,
                money: salary,
                transactionId: paymentIntent.id,
                id: trainerId,
                date: new Date(),
                status: "success"
            }
           const res = await axiosSecure.post('/paymentHistory', payment);
           console.log('payments Save ' , res.data);
          
           setTimeout(() => {
            navigate('/dashboard/paymentHistory')
        }, 1000);

        //     console.log(res=>{
        //         console.log(res.data);
        //     });
        }
    };
    useEffect(() => {
        document.title = " Fitness-Tracker | Checkout-Form";
    }, []);
    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="w-full lg:w-[70%]  mx-auto p-4 bg-white rounded-md shadow-md"
            >
                <h2 className="text-2xl font-semibold mb-2 text-center">Trainer Monthly Payment</h2>
                <h1 className='text-xl font-bold text-center '> Payment {salary} </h1>
                <div className="mb-6">
                    <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
                        Card Information
                    </label>
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
                </div>
                <button
                    type="submit"
                    disabled={!stripe || !clientSecret}
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Pay
                </button>

                {/* <button
                    type="submit"
                    disabled={!stripe || !clientSecret}
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Pay
                </button> */}
                <p className='text-red-500'>{error}</p>
                {transactionId && <p className='text-green-500 mt-3'>tnxId: {transactionId}</p>}
            </form>
            
            <ToastContainer></ToastContainer>
        </div>
    );
};
CheckoutForm.propTypes = {
    trainerId: PropTypes.object,
    salary: PropTypes.object
}

export default CheckoutForm;







// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useState } from "react";

// const CheckoutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const [error, setError] = useState('')
//     const handlePyment = async (event) => {
//         event.preventDefault();
       
//         if (!stripe || !elements) {
//             return
//         }
//         const card = elements.getElement(CardElement)
//         if (card === null) {
//             return
//         }

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: "card",
//             card
//         })
//         if (error) {
//             console.log("payment error", error);
//             setError(error.message);
//         }
//         else {
//             console.log('payment method', paymentMethod);
//             setError('');
//         }

//     }


    
//     return (
//         <div className="mt-40">
//             <form onSubmit={handlePyment}>
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />

//                 <button className=" badge badge-outline px-4 py-3 mt-4" type="submit">
//                     Payment
//                 </button>
//                 <p className="text-red-500 text-md "> {error}</p>
//             </form>

//         </div>
//     );
// };

// export default CheckoutForm;