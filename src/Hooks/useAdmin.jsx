import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin = [] ,refetch} = useQuery({
        queryKey: ["isAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin?role=admin`)
            return res.data
        }
    })
    return [isAdmin,refetch]
};

export default useAdmin;