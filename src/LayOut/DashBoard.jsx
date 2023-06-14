import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../Pages/hooks/useAdmin";
import useInstructor from "../Pages/hooks/useInstructorRole";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleSignOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-1/5 py-6 px-4">
        <div className="text-2xl mb-8">Profile Section</div>
        <ul className="space-y-2">
          {/* Admin Links */}
          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/manageclass"
                  className="text-blue-300 hover:text-blue-100 transition duration-300"
                  activeClassName="font-bold text-blue-100"
                >
                  Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allusers"
                  className="text-blue-300 hover:text-blue-100 transition duration-300"
                  activeClassName="font-bold text-blue-100"
                >
                  All Users
                </NavLink>
              </li>
            </>
          )}

          {/* Instructor Links */}
          {isInstructor && (
            <>
              <li>
                <NavLink
                  to="/dashboard/addclass"
                  className="text-blue-300 hover:text-blue-100 transition duration-300"
                  activeClassName="font-bold text-blue-100"
                >
                  Add Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myclass"
                  className="text-blue-300 hover:text-blue-100 transition duration-300"
                  activeClassName="font-bold text-blue-100"
                >
                  My Class
                </NavLink>
              </li>
            </>
          )}

          {/* Student Links */}
          {!isAdmin && !isInstructor && (
            <>
              <li>
                <NavLink
                  to="/dashboard/enrolled"
                  className="text-blue-300 hover:text-blue-100 transition duration-300"
                  activeClassName="font-bold text-blue-100"
                >
                  Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/selected"
                  className="text-blue-300  hover:text-blue-100 transition duration-300"
                  activeClassName="font-bold text-blue-100"
                >
                  Selected Classes
                </NavLink>
              </li>
            </>
          )}
        </ul>

   

        <div className=" mt-10">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className="text-blue-300 hover:text-blue-100 transition duration-300 flex items-center"
                activeClassName="font-bold text-blue-100"
              >
                <FaHome className="mr-2" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleSignOut}
                className="text-blue-300 hover:text-blue-100 transition duration-300 flex items-center"
              >
                <FaSignInAlt className="mr-2" /> Log Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-100 flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
