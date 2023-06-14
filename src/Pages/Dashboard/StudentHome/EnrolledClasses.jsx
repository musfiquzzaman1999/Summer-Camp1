import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const EnrolledClasses = () => {
  const [enrollData, setEnrollData] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://summer-camp-school-server-omega.vercel.app/enrolled/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setEnrollData(data));
  }, [user]);
  return (
    <div className="w-full">
      <h3 className="text-3xl font-bold my-8">Payment History</h3>
      <div className="overflow-x-auto border tDiv">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="tHead">
            <tr>
              <th>#</th>
              <th>User Email</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {enrollData.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>{data.email}</td>
                <td>{data.className}</td>
                <td>{data.instructorName}</td>
                <td>{data.price}</td>
                <td>{data.transactionId}</td>
                <td>
                  <button className="px-4 py-1 bg-red-200 rounded-2xl">
                    Payment Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
