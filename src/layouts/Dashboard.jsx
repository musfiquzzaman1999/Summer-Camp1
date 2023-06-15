import { Link, Outlet, useNavigate, } from "react-router-dom";
import { FaCreditCard, FaDharmachakra, FaHome, FaNotesMedical, FaPager, FaPlusCircle, FaPollH, FaSignInAlt, FaUser, FaUserGraduate, FaUserTie, FaUsersCog } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useInstructorRole from "../hooks/useInstructorRole";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructorRole();
  const {user} = useAuth()


  const handleSignOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center mx-8 text-center">
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
        <ul className="menu p-4 w-80 h-full bg-red-200 text-base-content rounded-md">
          {/* Sidebar content here */}

          <div className="text-center mt-8"> 
            <div className="flex "><img className=" w-40 h-40 object-fill mx-auto rounded-full border-2 border-red-400 " src={user.photoURL} alt="" /></div>
            <h2 className="font-semibold text-2xl my-2">{user.displayName}</h2>
            <h2 className="font-semibold flex flex-row gap-2 mt-4 justify-center items-center">{isAdmin? <> <FaUserTie></FaUserTie> Admin</> : isInstructor? <><FaUserGraduate></FaUserGraduate> Instructor</>: <>  <FaUser></FaUser> User</>}</h2>
          </div>
          <div className="divider"></div>

          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/manageclass"> <FaDharmachakra></FaDharmachakra> Manage Classes</Link>
              </li>
              <li>
                <Link to="/dashboard/manageusers"> <FaUsersCog></FaUsersCog> Manage Users</Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <Link to="/dashboard/addclass"> <FaPlusCircle></FaPlusCircle> Add Class</Link>
              </li>
              <li>
                <Link to="/dashboard/myclass"> <FaPager></FaPager> My Class</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/selected"> <FaNotesMedical></FaNotesMedical> SelectedClasses</Link>
              </li>
              <li>
                <Link to="/dashboard/enrolled"> <FaPollH></FaPollH> EnrolledClasses</Link>
              </li>
              <li>
                <Link to="/dashboard/paymenthistory"> <FaCreditCard></FaCreditCard> Payment History</Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome></FaHome> Home
            </Link>{" "}
          </li>
          <li>
            <Link onClick={handleSignOut}>
              <FaSignInAlt></FaSignInAlt> Log Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
