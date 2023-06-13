import { useState } from "react";
import { useEffect } from "react";



const Payment = () => {
    const [pay,setPay]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/carts')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
           
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
          
        </div>
    );
};

export default Payment;
