import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useInstructorRole from "../../hooks/useInstructorRole";

const ClassesDetails = ({ data }) => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructorRole();

  //   handle selected

  const handleSelect = (data) => {
    const {
      availableSeats,
      className,
      image,
      instructorEmail,
      instructorName,
      price,
      _id,
    } = data;
    const newData = {
      selectedId: _id,
      availableSeats,
      className,
      image,
      instructorEmail,
      instructorName,
      price,
      userEmail: user?.email,
    };

    if (user) {
      fetch(
        `https://summer-camp-school-server-omega.vercel.app/selectedClassData`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log(data);
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Please Login Fast",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <div key={data._id} className="flex justify-center">
        <div
          className={
            data.availableSeats === 0
              ? "max-w-sm rounded overflow-hidden shadow-lg bg-red-600 text-white"
              : "max-w-sm rounded overflow-hidden shadow-lg"
          }
        >
          <img
            className="w-full object-cover rounded-md p-4"
            src={data.image}
            alt="Nature"
          />
          <div className="px-6 py-4 space-y-2">
            <div className="font-bold text-xl">{data.className}</div>
            <p
              className={
                data.availableSeats === 0
                  ? "text-white text-base"
                  : "text-gray-700 text-base"
              }
            >
              <span className="font-semibold">instructor:</span>{" "}
              {data.instructorName}
            </p>
            <p
              className={
                data.availableSeats === 0
                  ? "text-white text-base"
                  : "text-gray-700 text-base"
              }
            >
              <span className="font-semibold">Available seats:</span>{" "}
              {data.availableSeats}
            </p>
            <p
              className={
                data.availableSeats === 0
                  ? "text-white text-base"
                  : "text-gray-700 text-base"
              }
            >
              <span className="font-semibold">Price:</span> {data.price}
            </p>
          </div>
          <div className="text-center my-8">
            {isAdmin || isInstructor || data.availableSeats === 0 ? (
              <>
                {" "}
                <button
                  disabled
                  className="py-3 px-6 bg-red-300 text-white rounded-xl transition duration-500"
                >
                  Select Now
                </button>
              </>
            ) : (
              <>
                {" "}
                <button
                  onClick={() => [handleSelect(data)]}
                  className="py-3 px-6 bg-red-400 text-white rounded-xl hover:bg-red-500 transition duration-500"
                >
                  Select Now
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesDetails;
