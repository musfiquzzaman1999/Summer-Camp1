import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

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
    signIn(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded shadow-lg">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Sign In</h2>
          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-700 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <div className="mt-1">
              <input
                className={`appearance-none block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                type="text"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium" htmlFor="password">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                className={`appearance-none block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                type={!show ? "password" : "text"}
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              <button
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 focus:outline-none"
                onClick={handleShow}
              >
                {!show ? <FaEye className="h-5 w-5" /> : <FaEyeSlash className="h-5 w-5" />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <a className="text-sm text-blue-500 hover:text-blue-700" href="#">
            Forgot Password?
          </a>
          <Link className="text-sm text-blue-500 hover:text-blue-700" to="/register">
            Create an account
          </Link>
        </div>
        <div className="text-center">
          <div className="mt-4">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
