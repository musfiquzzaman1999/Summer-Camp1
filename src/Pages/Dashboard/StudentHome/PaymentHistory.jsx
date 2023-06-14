import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const [payData, setPayData] = useState([]);
  const { user } = useAuth();
  // console.log(user)
  useEffect(() => {
    fetch(
      `https://summer-camp-school-server-omega.vercel.app/payments/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setPayData(data));
  }, [user]);
  // console.log(payData);
  return (
    <div className="w-full">
      <h3 className="text-3xl font-bold my-8">Payment History</h3>
      <div className="overflow-x-auto tDiv">
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
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payData.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>{data.email}</td>
                <td>{data.className}</td>
                <td>{data.instructorName}</td>
                <td>{data.price}</td>
                <td>{data.transactionId}</td>
                <td>{data.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
