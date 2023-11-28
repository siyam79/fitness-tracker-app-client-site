import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllTainers = () => {
   
    const axiosSecure = useAxiosSecure()
    const { data: allTrainer = [] ,refetch} = useQuery({
        queryKey: ["allTrainer"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/roleTrainer?role=trainer`)
            return res.data
        }
    })
    return [allTrainer,refetch]
};

export default useAllTainers;