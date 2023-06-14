import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [show, setShow] = useState(false);
    const { loggedUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleShow = () => {
      setShow(!show);
    };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    loggedUser(data.email, data.password)
    .then(result=> {
        const loggedInUser = result.user;
        console.log(loggedInUser)
        navigate(from, { replace: true });
    })
    .catch(err => {
        console.log(err)
    })
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
            htmlFor="email"
          >
            email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="email"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-6 relative">
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
            {...register("password", { required: "Password is required" })}
          />
          <Link
                  className="absolute right-3 bottom-5"
                  onClick={handleShow}
                >
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
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center">
        <SocialLogin></SocialLogin>
        <div className="divider w-3/4 mx-auto"></div> 
        <div>
            <Link to='/register' >Go to Register Page</Link>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
