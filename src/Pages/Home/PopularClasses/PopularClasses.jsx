import { Fade } from "react-awesome-reveal";
// import useClasses from "../../../hooks/useClasses";
import { useEffect, useState } from "react";
import axios from "axios";

const PopularClasses = () => {
  // const [classData] = useClasses()
  // console.log(classData)
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://summer-camp-school-server-omega.vercel.app/enroll")
      .then((res) => {
        setClassesData(res.data);
      });
  }, []);

  return (
    <div className="mt-12 md:mt-2 lg:mt-2">
      <Fade direction="right">
        <div className="my-4 text-center">
          <h2 className="text-[#EF4444] font-semibold text-xl">
            Diverse Classes
          </h2>
          <h2 className=" font-bold text-5xl mt-2">
            Discover Your Perfect Martial Arts Class
          </h2>
        </div>
      </Fade>
      <div className="grid md:grid-cols-3 gap-8 md:mx-20 md:my-20 mx-4 ">
        {classesData.slice(0, 6).map((data) => (
          <div key={data._id} className="flex justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full object-cover p-4 "
                src={data.image}
                alt="Nature"
              />
              <div className="px-6 py-4 space-y-2">
                <div className="font-bold text-xl">{data.className}</div>
                <p className="text-gray-700 text-base">
                  <span className="font-semibold">instructor:</span>{" "}
                  {data.instructorName}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-semibold">Available seats:</span>{" "}
                  {data.availableSeats}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-semibold">Total Enrolled:</span>{" "}
                  {data.enrolled || "00"}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-semibold">Price:</span> {data.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
