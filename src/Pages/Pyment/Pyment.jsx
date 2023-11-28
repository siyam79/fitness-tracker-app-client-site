import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";


// TODO 
const stripePromise = loadStripe(import.meta.env.VITE_PYMENT)

const Pyment = () => {
    return (
        <div className=" ">
            <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Pyment;