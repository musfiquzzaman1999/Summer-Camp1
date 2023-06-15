import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaCreditCard,
  FaDharmachakra,
  FaHome,
  FaNotesMedical,
  FaPager,
  FaPlusCircle,
  FaPollH,
  FaSignInAlt,
  FaUser,
  FaUserGraduate,
  FaUserTie,
  FaUsersCog,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useInstructorRole from "../hooks/useInstructorRole";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructorRole();
  const { user } = useAuth();

  const handleSignOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/5 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center justify-center mt-6">
            <img
              className="w-24 h-24 object-fill mx-auto rounded-full border-2 border-red-400"
              src={user.photoURL}
              alt=""
            />
          </div>
          <h2 className="text-2xl font-semibold text-center mt-4">{user.displayName}</h2>
          <h2 className="flex items-center justify-center mt-2 text-gray-600">
            {isAdmin ? (
              <>
                <FaUserTie className="mr-2" /> Admin
              </>
            ) : isInstructor ? (
              <>
                <FaUserGraduate className="mr-2" /> Instructor
              </>
            ) : (
              <>
                <FaUser className="mr-2" /> User
              </>
            )}
          </h2>
        </div>
        <div className="mt-8">
          {isAdmin ? (
            <>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/dashboard/manageclass"
                    className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
                  >
                    <FaDharmachakra className="mr-2" /> Manage Classes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageusers"
                    className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
                  >
                    <FaUsersCog className="mr-2" /> Manage Users
                  </Link>
                </li>
              </ul>
            </>
          ) : isInstructor ? (
            <>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/dashboard/addclass"
                    className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
                  >
                    <FaPlusCircle className="mr-2" /> Add Class
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/myclass"
                    className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
                  >
                    <FaPager className="mr-2" /> My Class
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/dashboard/selected"
                    className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
                  >
                    <FaNotesMedical className="mr-2" /> Selected Classes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/enrolled"
                    className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
                  >
                    <FaPollH className="mr-2" /> Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/paymenthistory"
                    className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
                  >
                    <FaCreditCard className="mr-2" /> Payment History
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
        <div className="mt-auto">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
              >
                <FaHome className="mr-2" /> Home
              </Link>{" "}
            </li>
            <li>
              <Link
                onClick={handleSignOut}
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200"
              >
                <FaSignInAlt className="mr-2" /> Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 p-4 bg-gray-200">
        {/* Page content here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
