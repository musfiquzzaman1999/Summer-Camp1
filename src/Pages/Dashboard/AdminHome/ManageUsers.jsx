import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: data = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });

  console.log(data);

  const handleMakeAdmin = (user) => {
    fetch(
      `https://summer-camp-school-server-omega.vercel.app/users/admin/${user._id}`,
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
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    console.log(user._id);

    //   fetch(`https://summer-camp-school-server-omega.vercel.app/instructor/${user._id}`, {
    //     method: 'DELETE'
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     if(data.deletedCount>0){
    //        console.log(data)
    //     }
    // })
  };
  const handleMakeInstructor = (user) => {
    fetch(
      `https://summer-camp-school-server-omega.vercel.app/users/instructor/${user._id}`,
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
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    const upInstructor = {
      name: user.name,
      email: user.email,
      image: user.image,
    };

    fetch(`https://summer-camp-school-server-omega.vercel.app/instructor`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(upInstructor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
        }
      });
  };

  const handleDelete = (user) => {
    console.log(user);
    // fetch(`https://summer-camp-school-server-omega.vercel.app/users/${user._id}`, {
    //     method: 'DELETE'
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     if(data.deletedCount>0){
    //         refetch();
    //         // currentUserDelete()
    //         Swal.fire({
    //             position: 'top-end',
    //             icon: 'success',
    //             title: `${user.name} is an Instructor Now!`,
    //             showConfirmButton: false,
    //             timer: 1500
    //           })
    //     }
    // })
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
                <th>Email</th>
                <th>Role</th>
                <th>Instructor</th>
                <th>Admin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role || "user"}</td>
                  <td>
                    {user.role === "instructor" ? (
                      <button
                        className="btn btn-ghost bg-orange-600  text-white"
                        disabled
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-ghost bg-orange-600  text-white"
                        disabled={user.role === "admin" && true}
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    )}
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      <button
                        className="btn btn-ghost bg-orange-600  text-white"
                        disabled
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost bg-orange-600  text-white"
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost bg-red-600  text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
