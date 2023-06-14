
import { Fade } from "react-awesome-reveal";
import useInstructors from "../../../hooks/useInstructors";

const PopularInstructors = () => {
  const [instructorData] = useInstructors()
  // console.log(instructorData)
    return (
        <div>
           <Fade direction="right">
          <div className="my-4 text-center">
        <h2 className="text-[#EF4444] font-semibold text-xl">Expert Guidance</h2>
        <h2 className=" font-bold text-5xl mt-2">Learn from Masters of the Martial Arts</h2>
      </div>
      </Fade>
          <div className="grid md:grid-cols-3 mx-4 gap-8 md:mx-44 md:my-20 ">
      {instructorData.slice(0, 6).map((data) => (
        <div key={data._id} className="flex justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="h-[20rem] w-[40rem] p-4 object-cover rounded-md"
              src={data.image}
              alt="Nature"
            />
            <div className="px-6 py-4 space-y-2">
              <div className="font-bold text-xl">{data.name}</div>
              <p className="text-gray-700 text-base">
                <span className="font-semibold">Email:</span>{" "}
                {data.email}
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