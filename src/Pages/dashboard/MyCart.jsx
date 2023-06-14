import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../hooks/useClasses";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // Remove the item from localStorage
              localStorage.removeItem("selectedCardId");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Pryment</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.thumbnail} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white">
                    <FaTrashAlt />
                  </button>
                </td>
                <Link to={`/dashboard/payment/${item._id}`}>
               <button className="btn btn-warning btn-sm">PAY</button>
               </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
