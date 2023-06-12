import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


import useAdmin from "../Pages/hooks/useAdmin";
import useInstructor from "../Pages/hooks/useInstructor";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // const isAdmin = true;
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()

  const handleSignOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <li> profile section</li>
          <div className="divider"></div>

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageclass">Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">All Users</NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/addclass">Add Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myclass">My Class</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/enrolled">Enrolled Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/selected">Selected Classes</NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink onClick={handleSignOut}>
              <FaSignInAlt></FaSignInAlt> Log Out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
