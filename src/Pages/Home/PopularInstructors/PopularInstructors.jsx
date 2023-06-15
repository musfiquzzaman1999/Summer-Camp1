import { Fade } from "react-awesome-reveal";
import useInstructors from "../../../hooks/useInstructors";

const PopularInstructors = () => {
  const [instructorData] = useInstructors();

  return (
    <div>
      <Fade direction="right">
        <div className="my-4 text-center">
          <h2 className="text-[#EF4444] font-semibold text-xl">
            Top Instructors
          </h2>
          <div className="text-center mt-5">
            <p>Top instructors are distinguished educators who excel in their field, <br /> possess deep expertise, and inspire learners to achieve their best. <br /> With their exceptional teaching skills and dedication, <br /> they create engaging learning experiences and <br /> empower students to reach their full potential.</p>
          </div>
        </div>
      </Fade>
      <div className="grid md:grid-cols-3 mx-4 gap-8 md:mx-44 md:my-20">
        {instructorData.slice(0, 6).map((data) => (
          <div key={data._id} className="flex justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="h-64 w-full object-cover rounded-md"
                src={data.image}
                alt="Instructor"
              />
              <div className="px-6 py-4 space-y-2">
                <div className="font-bold text-xl">{data.name}</div>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> {data.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
