// import { useEffect, useState } from "react";
import ClassesDetails from "./ClassesDetails";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Classes = () => {
  // const [classesData, setClassesData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://summer-camp-school-server-omega.vercel.app/classStatus/approved"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setClassesData(data));
  // }, []);

  const [axiosSecure] = useAxiosSecure();
  const { data: data = [] } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await axiosSecure(`/classStatus/approved`);
      return res.data;
    },
  });

  // console.log(data)

  return (
    <>
      <h2 className="my-8 text-center font-bold text-5xl">All Classes</h2>
      <div className="grid grid-cols-3 gap-8 md:mx-20 md:my-20 ">
        {data.map((data) => (
          <ClassesDetails key={data._id} data={data}></ClassesDetails>
        ))}
      </div>
    </>
  );
};

export default Classes;
