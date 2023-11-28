import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('')
    const handlePyment = async (event) => {
        event.preventDefault();
        // console.log(event);
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log("payment error", error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
        }

    }


    // Vq5+6_.9+XEPRBD
    return (
        <div className="mt-40">
            <form onSubmit={handlePyment}>
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

                <button className=" badge badge-outline px-4 py-3 mt-4" type="submit">
                    Payment
                </button>
                <p className="text-red-500 text-md "> {error}</p>
            </form>

        </div>
    );
};

export default CheckoutForm;