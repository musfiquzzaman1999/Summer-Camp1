import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useInstructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructorData = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructor'],
        queryFn: async() => {
            const res = await axiosSecure('/instructor');
            return res.data;
        }
      })
      return [instructorData, loading, refetch]
};

export default useInstructors;