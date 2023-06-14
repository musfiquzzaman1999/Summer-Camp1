import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleShow = () => {
    setShow(!show);
  };
  const handleShow2 = () => {
    setShow2(!show2);
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoUrl).then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            image: data.photoUrl,
          };
          fetch("https://summer-camp-school-server-omega.vercel.app/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/login");
              }
            });
        });
        logOut();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : ""
            }`}
            type={!show ? "password" : "text"}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              validate: (value) => {
                const hasUppercase = /[A-Z]/.test(value);
                const hasLowercase = /[a-z]/.test(value);
                const hasNumber = /\d/.test(value);
                const hasSpecialChar = /[!@#$%^&*]/.test(value);
                return (
                  (hasUppercase &&
                    hasLowercase &&
                    hasNumber &&
                    hasSpecialChar) ||
                  "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
                );
              },
            })}
          />
          <Link className="absolute right-3 bottom-5" onClick={handleShow}>
            {" "}
            {!show ? (
              <FaEye className="text-primary"></FaEye>
            ) : (
              <FaEyeSlash className="text-primary"></FaEyeSlash>
            )}{" "}
          </Link>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
            type={!show2 ? "password" : "text"}
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          <Link className="absolute right-3 bottom-5" onClick={handleShow2}>
            {" "}
            {!show2 ? (
              <FaEye className="text-primary"></FaEye>
            ) : (
              <FaEyeSlash className="text-primary"></FaEyeSlash>
            )}{" "}
          </Link>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photoUrl"
          >
            Photo URL
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.photoUrl ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Photo URL"
            {...register("photoUrl", {
              required: "Photo URL is required",
              pattern: {
                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg))$/i,
                message: "Invalid photo URL format",
              },
            })}
          />
          {errors.photoUrl && (
            <p className="text-red-500 text-xs mt-1">
              {errors.photoUrl.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
        <div className="text-center">
          <SocialLogin></SocialLogin>
          <div className="divider w-3/4 mx-auto"></div>
          <div>
            <Link to="/login">Go to Login Page</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
