import  { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signIn(email, password);
      Swal.fire({
        title: 'User Login Successful.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
      navigate(from, { replace: true });
    } catch (error) {
      // Handle Firebase authentication errors
      let errorMessage = 'An error occurred. Please try again.';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'User not found.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Invalid password.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email.';
      }
      Swal.fire({
        title: 'Login Error',
        text: errorMessage,
        icon: 'error',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded shadow p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6">Login now!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" placeholder="email" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none" {...register('email', { required: 'Email is required' })} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" name="password" placeholder="password" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none" {...register('password', { required: 'Password is required' })} />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-700">Forgot password?</Link>
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50" type="submit">Login</button>
          </div>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">New Here? <Link to="/signup" className="text-blue-500">Create an account</Link></p>
      </div>
    </div>
  );
};

export default Login;
