import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const { user } = useAuth();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.classImage[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const {
            className,
            instructorEmail,
            instructorName,
            price,
            availableSeats,
          } = data;
          const classes = {
            className,
            instructorEmail,
            instructorName,
            price: parseFloat(price),
            availableSeats: parseFloat(availableSeats),
            image: imgURL,
          };
          // console.log(classes);
          fetch("https://summer-camp-school-server-omega.vercel.app/classes", {
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
        }
      });
  };

  return (
    <>
      <div className="w-3/4 mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Add a Class</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex gap-4">
            <div className="w-full text-left space-y-2">
              <label htmlFor="class-name" className="block font-medium">
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

            <div className="w-full text-left space-y-2">
              <label htmlFor="class-image" className="block font-medium">
                Class Image:
              </label>
              <input
                type="file"
                id="class-image"
                {...register("classImage", { required: true })}
                className="border border-gray-300 px-3 py-2 rounded-lg w-full"
              />
              {errors.classImage && (
                <p className="text-red-500">Class image is required</p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full text-left space-y-2">
              <label htmlFor="instructor-name" className="block font-medium">
                Instructor name:
              </label>
              <input
                type="text"
                id="instructor-name"
                readOnly
                value={user.displayName}
                {...register("instructorName", { required: true })}
                className="border border-gray-300 px-3 py-2 rounded-lg w-full bg-gray-100"
              />
            </div>

            <div className="w-full text-left space-y-2">
              <label htmlFor="instructor-email" className="block font-medium">
                Instructor email:
              </label>
              <input
                type="email"
                id="instructor-email"
                readOnly
                value={user.email}
                {...register("instructorEmail", { required: true })}
                className="border border-gray-300 px-3 py-2 rounded-lg w-full bg-gray-100"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full text-left space-y-2">
              <label htmlFor="available-seats" className="block font-medium">
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

            <div className="w-full text-left space-y-2">
              <label htmlFor="price" className="block font-medium">
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
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 w-full rounded-lg"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
