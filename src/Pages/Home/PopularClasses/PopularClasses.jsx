import { Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import axios from "axios";

const PopularClasses = () => {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    axios.get("https://summercamp-eight.vercel.app/enroll").then((res) => {
      setClassesData(res.data);
    });
  }, []);

  return (
    <div className="mt-12 md:mt-2 lg:mt-2">
      <Slide direction="right" >
        <div className="my-4 text-center">
          <h2 className="text-[#EF4444] font-semibold text-xl">
            Top  Classes
          </h2>
          
          <div className="text-center mt-5">
            <p>
Popular classes offer engaging and high-quality learning experiences <br /> in various fields. From fitness and cooking to coding and photography, <br /> these classes attract learners worldwide. Expert instructors, <br /> comprehensive content, and interactive formats make these classes a top choice for <br /> those seeking to acquire new skills and pursue their passions effectively.</p>
          </div>
        </div>
      </Slide>
      <div className="grid md:grid-cols-3 gap-8 md:mx-20 md:my-20 mx-4">
        {classesData.slice(0, 6).map((data, index) => (
          <Slide key={data._id} direction={index % 2 === 0 ? "left" : "right"}>
            <div className="flex justify-center">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full h-48 object-cover"
                  src={data.classImage}
                  alt="Class"
                />
                <div className="px-6 py-4 space-y-2">
                  <div className="font-bold text-xl">{data.className}</div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Instructor:</span>{" "}
                    {data.instructorName}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Available Seats:</span>{" "}
                    {data.availableSeats}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Total Enrolled:</span>{" "}
                    {data.enrolled || "00"}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Price: $</span> {data.price}
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
