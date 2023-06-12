import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const Class = ({ item }) => {
  const { thumbnail, students, price, _id, name, description, instructorName } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, refetch] = useCart();
  const location = useLocation();
  const [isButtonDisabled, setButtonDisabled] = useState(false); // Button disabling state

  const availableSeats = 25 - students; // Calculate available seats

  useEffect(() => {
    const selectedCardId = localStorage.getItem("selectedCardId");
    if (selectedCardId === _id) {
      setButtonDisabled(true);
    }
  }, [_id]);

  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      const classItem = { itemId: _id, instructorName, price, thumbnail, name, email: user.email };
      setButtonDisabled(true); // Disable the button
      localStorage.setItem("selectedCardId", _id); // Store the selected card's ID in localStorage
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogIn Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="mt-28">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Instructor: {instructorName}</h2>
          <h2>Name: {name}</h2>
          <p>Students: {students}</p>
          <p>Price: ${price}</p>
          <p>Available Seats: {availableSeats}</p> {/* Display available seats */}
        </div>
        <button onClick={() => handleAddToCart(item)} className="btn btn-success" disabled={isButtonDisabled}>
          {isButtonDisabled ? "Selected" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default Class;
