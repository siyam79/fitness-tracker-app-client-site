import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { useParams } from "react-router-dom";


// TODO 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Geteway_PK)

const Pyment = () => {
    const {salary, _id} = useParams();
    console.log(salary, _id);
    return (
        <div>
            <Elements stripe={stripePromise}>
            <CheckoutForm salary={salary} trainerId={_id}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Pyment;