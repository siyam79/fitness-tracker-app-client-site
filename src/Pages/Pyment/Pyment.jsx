import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


// TODO 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Geteway_PK)

const Pyment = () => {
    const {salary, _id , status } = useParams();
    console.log(salary, _id , status);

    useEffect(() => {
        document.title = " Fitness-Tracker | Payment";
    }, []);
    return (
        <div>
            <Elements stripe={stripePromise}>
            <CheckoutForm salary={salary} trainerId={_id} status={status} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Pyment;