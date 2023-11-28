import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";


// TODO 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Geteway_PK)

const Pyment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Pyment;