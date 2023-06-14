import { FaCheck, FaRegListAlt, FaTimes } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [getId, setGetId] = useState("");
  const { data: classes = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure("/classes");
    return res.data;
  });

  console.log(classes);

  const handleApproved = (id) => {
    fetch(
      `https://summer-camp-school-server-omega.vercel.app/classes/approved/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Approved !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = (id) => {
    fetch(
      `https://summer-camp-school-server-omega.vercel.app/classes/deny/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `Deny !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleFeedback = (e) => {
    console.log(getId);
    const form = e.target;
    const message = form.message.value;
    const feedData = { message };
    fetch(
      `https://summer-camp-school-server-omega.vercel.app/classes/feedback/${getId}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(feedData),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    form.reset();
  };

  return (
    <>
      <div className="w-full">
        <h3 className="text-3xl font-bold text-center my-12">Manage User</h3>
        <div className="overflow-x-auto tDiv">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead className="tHead">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Instructor Email</th>
                <th>Price</th>
                <th>available_seats</th>
                <th>status</th>
                <th>Approve</th>
                <th>Deny</th>
                <th>send feedback</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((data, index) => (
                <tr key={data._id}>
                  <th>{index + 1}</th>
                  <td>
                    {" "}
                    <img
                      className="w-20 rounded-lg"
                      src={data.image}
                      alt=""
                    />{" "}
                  </td>
                  <td>{data.className}</td>
                  <td>{data.instructorName}</td>
                  <td>{data.price}</td>
                  <td>{data.price}</td>
                  <td>{data.availableSeats}</td>
                  <td>{data.status || "Pending"}</td>
                  <td>
                    {data.status === "approved" || data.status === "deny" ? (
                      <button
                        className="btn btn-ghost bg-orange-600  text-white"
                        disabled
                      >
                        <FaCheck></FaCheck>
                      </button>
                    ) : (
                      <button
                        className="btn btn-ghost bg-orange-600  text-white"
                        onClick={() => handleApproved(data._id)}
                      >
                        <FaCheck></FaCheck>
                      </button>
                    )}
                  </td>
                  <td>
                    {data.status === "deny" || data.status === "approved" ? (
                      <button
                        className="btn btn-ghost bg-orange-600  text-white"
                        disabled
                      >
                        <FaTimes></FaTimes>
                      </button>
                    ) : (
                      <button
                        className="btn btn-ghost bg-orange-600  text-white"
                        onClick={() => handleDeny(data._id)}
                      >
                        <FaTimes></FaTimes>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost bg-orange-600  text-white"
                      disabled={data.status === "deny" ? false : true}
                      onClick={() => [
                        window.my_modal_1.showModal(),
                        setGetId(data._id),
                      ]}
                    >
                      <FaRegListAlt></FaRegListAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* modal body */}
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" onSubmit={handleFeedback} className="modal-box">
            <div>
              <label htmlFor="message" className="text-gray-700 font-bold mb-2">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-40 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Submit</button>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default ManageClasses;
