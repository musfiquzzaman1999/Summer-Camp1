import { Elements } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";







const Payment = () => {
   
const id = useParams();
  const [cart,setCart] = useState([]);
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  useEffect(() => {
    fetch(
    `http://localhost:5000/card/${id?.id}`
    )
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [id]);
  

  console.log(cart);

    return (
        <div>
           
           <Elements stripe={stripePromise}>
        <CheckoutForm price={cart.price} cart={cart}></CheckoutForm>
      </Elements>
          
        </div>
    );
};

export default Payment;
