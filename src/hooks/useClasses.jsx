import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
const useClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classData = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['class'],
    queryFn: async() => {
        const res = await axiosSecure('/classes');
        return res.data;
    }
  })
  return [classData, loading, refetch]
};

export default useClasses;