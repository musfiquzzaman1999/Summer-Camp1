import useAdmin from "../../../hooks/useAdmin";
import useInstructorRole from "../../../hooks/useInstructorRole";
import { FaUsers, FaChalkboardTeacher, FaUserShield } from "react-icons/fa";


const DashboardHome = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructorRole();

  const renderDashboardTitle = () => {
    if (isAdmin) {
      return <h2 className="text-4xl font-bold my-4">Admin Dashboard</h2>;
    } else if (isInstructor) {
      return <h2 className="text-4xl font-bold my-4">Instructor Dashboard</h2>;
    } else {
      return <h2 className="text-4xl font-bold my-4">User Dashboard</h2>;
    }
  };

  

  return (
    <div className="h-screen bg-gray-100">
      <div className="container mx-auto py-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6">
          {/* Dashboard Title */}
          {renderDashboardTitle()}

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <div className="flex items-center">
                <div className="bg-primary rounded-lg p-3">
                  <FaUsers className="text-white text-3xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold mb-2">Total Users</h3>
                  <p className="text-gray-800">***</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <div className="flex items-center">
                <div className="bg-primary rounded-lg p-3">
                  <FaChalkboardTeacher className="text-white text-3xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold mb-2">Total Instructors</h3>
                  <p className="text-gray-800">***</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <div className="flex items-center">
                <div className="bg-primary rounded-lg p-3">
                  <FaUserShield className="text-white text-3xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold mb-2">Total Admins</h3>
                  <p className="text-gray-800">***</p>
                </div>
              </div>
            </div>
          </div>

         
          
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
