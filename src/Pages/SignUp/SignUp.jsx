import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        return updateUserProfile(data.name, data.photoURL);
      })
      .then(() => {
        const saveUser = { name: data.name, email: data.email };
        return fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(saveUser),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User created successfully.',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
        <p className='text-white'>.</p>
        <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="bg-white rounded shadow p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 ">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*])/i,
                  message:
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) => value === watch('password') || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
              {...register('photoURL')}
            />
          </div>
          <div className="mb-4">
            <input
              type="submit"
              value="Sign Up"
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            />
          </div>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Signup;

