
import { Link } from 'react-router-dom';


const NavBar = () => {
  
  const navOptions = (
    <>
      <li>
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
      </li>
      <li>
        <Link to="/classes" className="hover:text-gray-300">
          Classes
        </Link>
      </li>
      <li>
        <Link to="/instractor" className="hover:text-gray-300">
          Instractor
        </Link>
      </li>
      
      <li>
        <Link to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li>
        
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl hover:text-gray-300"
        >
          Bistro Boss
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
      <div className="avatar mr-4 ">
    <div className="w-12 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
        <a className="btn"><Link to="/login" className="hover:text-gray-300">
          Login
        </Link></a>
      </div>
    </div>
  );
};

export default NavBar;
