import useAdmin from "../../../hooks/useAdmin";
import useInstructorRole from "../../../hooks/useInstructorRole";
import d1 from "../../../assets/d1.svg";
import d2 from "../../../assets/d2.svg";
import d3 from "../../../assets/d3.svg";
const DashboardHome = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructorRole();

  return (
    <div>
      {isAdmin ? (
        <>
          <div>
            <div className="h-screen">
              {/* Main Content */}
              <div className="flex-1 p-10 ">
                {/* Main Content goes here */}
                <h2 className="text-4xl font-bold my-4">Admin Dashboard</h2>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-12 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-xl w-96">
                    <h3 className="text-lg font-bold mb-2">Total Users</h3>
                    <p className="text-gray-800">***</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-xl w-96">
                    <h3 className="text-lg font-bold mb-2">Total Instructor</h3>
                    <p className="text-gray-800">***</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-xl w-96">
                    <h3 className="text-lg font-bold mb-2">Total Admin</h3>
                    <p className="text-gray-800">***</p>
                  </div>
                </div>

                {/* User Chart */}
                <div className="flex justify-center items-center mt-20">
                  <img className="w-[50%]" src={d3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : isInstructor ? (
        <>
          <div>
            <div className="h-screen">
              {/* Main Content */}
              <div className="flex-1 p-10 ">
                {/* Main Content goes here */}
                <h2 className="text-4xl font-bold my-4">Instructor Dashboard</h2>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-12 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-xl w-96">
                    <h3 className="text-lg font-bold mb-2">Total Users</h3>
                    <p className="text-gray-800">***</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-xl w-96">
                    <h3 className="text-lg font-bold mb-2">Total Instructor</h3>
                    <p className="text-gray-800">***</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-xl w-96">
                    <h3 className="text-lg font-bold mb-2">Total Admin</h3>
                    <p className="text-gray-800">***</p>
                  </div>
                </div>

                {/* User Chart */}
                <div className="flex justify-center items-center mt-20">
                  <img className="w-[50%]" src={d1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="h-screen">
              {/* Main Content */}
              <div className="flex-1 p-10 ">
                {/* Main Content goes here */}
                <h2 className="text-4xl font-bold my-4">User Dashboard</h2>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-12 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-xl w-96">
                    <h3 className="text-lg font-bold mb-2">Total Users</h3>
                    <p className="text-gray-800">***</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-xl w-96">
                    <h3 className="text-lg font-bold mb-2">Total Instructor</h3>
                    <p className="text-gray-800">***</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-xl w-96">
                    <h3 className="text-lg font-bold mb-2">Total Admin</h3>
                    <p className="text-gray-800">***</p>
                  </div>
                </div>

                {/* User Chart */}
                <div className="flex justify-center items-center mt-20">
                  <img className="w-[50%]" src={d2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardHome;
