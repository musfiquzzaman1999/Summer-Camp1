
import SelectedClassesTable from "./SelectedClassesTable";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const SelectedClasses = () => {
    const {user} = useAuth()

    const [axiosSecure] = useAxiosSecure();
  const { data: classData = [], refetch} = useQuery({
    queryKey: ['classData'],
    queryFn: async() => {
        const res = await axiosSecure(`/selectedClass/${user?.email}`);
        return res.data;
    }
  })
 
    
    return (
        <div className="w-full">
        <h3 className="text-3xl font-semibold my-4">
          Total Users
        </h3>
        <div className="overflow-x-auto tDiv">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead className="tHead">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Instructor Name</th>
                <th>Price</th>
                <th>Pay</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {classData.map((data, index) => (
                <SelectedClassesTable key={data._id} data={data} index={index} refetch={refetch} ></SelectedClassesTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default SelectedClasses;