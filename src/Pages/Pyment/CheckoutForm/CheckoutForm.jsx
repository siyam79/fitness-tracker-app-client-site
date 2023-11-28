import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handlePyment = async (event) => {
        event.preventDefault();
        if (!stripe || elements) {
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
            console.log("payment error");
        }
        else{
            console.log('payment method' , paymentMethod);
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
                <div className="mt-4 ">
                    <button className=" badge badge-outline py-4 px-6  " type="submit" disabled={!stripe}>
                        Payment
                    </button>
                </div>
            </form>

        </div>
    );
};

export default CheckoutForm;