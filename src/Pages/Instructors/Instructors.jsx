import useInstructors from "../../hooks/useInstructors";

const Instructors = () => {
  const [instructorData] = useInstructors()
  
    return (
      <>
        <h2 className="my-8 text-center font-bold text-5xl">All Instructor</h2>
        <div className="grid md:grid-cols-3 gap-8 md:mx-20 md:my-20 ">
        {instructorData.map((data) => (
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
      </>
    );
};

export default Instructors;