// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaCreditCard, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedClassesTable = ({ data, index, refetch }) => {
  const handleDelete = (id) => {
    axios
      .delete(
        `https://summer-camp-school-server-omega.vercel.app/deletedClass/${id}`
      )
      .then((res) => {
        if (res.data.deletedCount) {
          console.log(res.data);
          refetch();
        }
      });
  };
  return (
    <>
      {
        <tr key={data._id}>
          <th>{index + 1}</th>
          <td>{data.className}</td>
          <td>{data.instructorName}</td>
          <td>{data.price}</td>
          <td>{data.userEmail}</td>
          <td>
            <Link className="btn btn-ghost bg-orange-600  text-white" to={`/dashboard/pay/${data._id}`}>
              <FaCreditCard></FaCreditCard>
            </Link>
          </td>
          <td>
            <button className="btn btn-ghost bg-orange-600  text-white" onClick={() => handleDelete(data._id)}>
              <FaTrashAlt></FaTrashAlt>
            </button>
          </td>
        </tr>
      }
    </>
  );
};

export default SelectedClassesTable;
