import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Pay = () => {
  const id = useParams();
  const [takePrice, setTakePrice] = useState([]);
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  useEffect(() => {
    fetch(
      `https://summer-camp-school-server-omega.vercel.app/selectedClasses/${id.id}`
    )
      .then((res) => res.json())
      .then((data) => setTakePrice(data));
  }, [id]);

  console.log(takePrice);

  return (
    <div className="w-1/4 mx-auto">
      <h2 className="">Payment</h2>

      <Elements stripe={stripePromise}>
        <CheckoutForm price={takePrice.price} data={takePrice}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Pay;
