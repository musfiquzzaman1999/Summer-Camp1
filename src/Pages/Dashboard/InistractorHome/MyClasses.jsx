import { FaListAlt, FaRegEdit } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyClasses = () => {
  const [showFedData, setShowFedData] = useState([]);
  const [getId, setGetId] = useState("");
  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();
  const { data: data = [], refetch } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await axiosSecure(`/instructorClasses/${user?.email}`);
      return res.data;
    },
  });

  const handleShowFedData = (id) => {
    fetch(`http://localhost:5000/classes/${id}`)
      .then((res) => res.json())
      .then((data) => setShowFedData(data));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const className = form.text.value;
    const price = form.price.value;
    const feedData = { className, price };
    console.log(getId, feedData);
    fetch(`http://localhost:5000/classesUpdate/${getId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(feedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          refetch();
        }
      });
  };

  return (
    <>
      <div className="w-full">
        <h3 className="text-3xl font-semibold my-4">Total Users</h3>
        <div className="overflow-x-auto tDiv">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead className="tHead">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Instructor Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>enroll</th>
                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((data, index) => (
                <tr key={data._id}>
                  <th>{index + 1}</th>
                  <td>{data.className}</td>
                  <td>{data.instructorName}</td>
                  <td>{data.price}</td>
                  <td>{data?.status || "pending"}</td>
                  <td>{data?.enroll || "00"}</td>
                  <td>
                    <button
                      disabled={!data?.feedback && true}
                      onClick={() => [
                        window.my_modal_2.showModal(),
                        handleShowFedData(data._id),
                      ]}
                      className="btn btn-ghost bg-orange-600 text-white"
                    >
                      <FaListAlt></FaListAlt>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost bg-orange-600 text-white"
                      onClick={() => [
                        window.my_modal_1.showModal(),
                        setGetId(data._id),
                      ]}
                    >
                      <FaRegEdit></FaRegEdit>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* feedback modal body */}
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Feedback</h3>
            <p className="py-4">{showFedData?.feedback?.message}</p>
            <div className="modal-action">
              <button
                onClick={() => window.my_modal_2.close()}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </form>
        </dialog>
        {/* update modal body */}
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" onSubmit={handleUpdate} className="modal-box">
            <div>
              <label htmlFor="text" className="text-gray-700 font-bold mb-2">
                Class Name:
              </label>
              <input
                id="text"
                name="text"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your class Name"
              ></input>
            </div>
            <div>
              <label htmlFor="price" className="text-gray-700 font-bold mb-2">
                Price:
              </label>
              <input
                id="price"
                name="price"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your price"
              ></input>
            </div>
            <div className="modal-action">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => window.my_modal_1.close()}>Close</button>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default MyClasses;
