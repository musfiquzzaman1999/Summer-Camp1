import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaCreditCard, FaDharmachakra, FaHome, FaNotesMedical, FaPager, FaPlusCircle, FaPollH, FaSignInAlt, FaUser, FaUserGraduate, FaUserTie, FaUsersCog } from "react-icons/fa";
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
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="bg-gray-800 w-64 flex flex-col">
        <div className="flex flex-col items-center p-4 border-b border-gray-700">
          <img className="w-20 h-20 rounded-full mb-2" src={user.photoURL} alt="" />
          <h2 className="text-white text-lg font-semibold">{user.displayName}</h2>
          <h2 className="text-white text-sm flex items-center mt-2">
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
        <nav className="flex-1">
          <ul className="space-y-1 mt-6">
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/manageclass" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
                    <FaDharmachakra className="mr-3" />
                    Manage Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageusers" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
                    <FaUsersCog className="mr-3" />
                    Manage Users
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <Link to="/dashboard/addclass" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
                    <FaPlusCircle className="mr-3" />
                    Add Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myclass" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
                    <FaPager className="mr-3" />
                    My Class
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/selected" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
                    <FaNotesMedical className="mr-3" />
                    Selected Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/enrolled" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
                    <FaPollH className="mr-3" />
                    Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/paymenthistory" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
                    <FaCreditCard className="mr-3" />
                    Payment History
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className="border-t border-gray-700 p-4">
          <ul className="space-y-1">
            <li>
              <Link to="/" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
                <FaHome className="mr-3" />
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleSignOut} className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700">
                <FaSignInAlt className="mr-3" />
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Page Content */}
      <div className="flex-1 bg-gray-100">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
