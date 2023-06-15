import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      className,
      classImage,
      instructorEmail,
      instructorName,
      price,
      availableSeats,
    } = data;

    const classes = {
      className,
      classImage,
      instructorEmail,
      instructorName,
      price: parseFloat(price),
      availableSeats: parseFloat(availableSeats),
    };

    console.log(classes);

    // Add your logic here to save the class details using the provided data.
    // You can make an API call to save the data to your backend server.
    // Example code:
    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(classes),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Add a Class</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col space-y-4">
          <div className="w-full">
            <label htmlFor="class-name" className="font-medium">
              Class name:
            </label>
            <input
              type="text"
              id="class-name"
              {...register("className", { required: true })}
              className="border border-gray-300 px-3 py-2 rounded-lg w-full"
            />
            {errors.className && (
              <p className="text-red-500">Class name is required</p>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="class-image" className="font-medium">
              Class Image URL:
            </label>
            <input
              type="text"
              id="class-image"
              {...register("classImage", { required: true })}
              className="border border-gray-300 px-3 py-2 rounded-lg w-full"
            />
            {errors.classImage && (
              <p className="text-red-500">Class image URL is required</p>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="instructor-name" className="font-medium">
              Instructor name:
            </label>
            <input
              type="text"
              id="instructor-name"
              readOnly
              value={user.displayName}
              {...register("instructorName", { required: true })}
              className="border border-gray-300 px-3 py-2 rounded-lg bg-gray-100 w-full"
            />
          </div>

          <div className="w-full">
            <label htmlFor="instructor-email" className="font-medium">
              Instructor email:
            </label>
            <input
              type="email"
              id="instructor-email"
              readOnly
              value={user.email}
              {...register("instructorEmail", { required: true })}
              className="border border-gray-300 px-3 py-2 rounded-lg bg-gray-100 w-full"
            />
          </div>

          <div className="w-full">
            <label htmlFor="available-seats" className="font-medium">
              Available seats:
            </label>
            <input
              type="number"
              id="available-seats"
              {...register("availableSeats", { required: true })}
              className="border border-gray-300 px-3 py-2 rounded-lg w-full"
            />
            {errors.availableSeats && (
              <p className="text-red-500">Available seats is required</p>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="price" className="font-medium">
              Price:
            </label>
            <input
              type="text"
              id="price"
              {...register("price", { required: true })}
              className="border border-gray-300 px-3 py-2 rounded-lg w-full"
            />
            {errors.price && (
              <p className="text-red-500">Price is required</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 w-full rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
