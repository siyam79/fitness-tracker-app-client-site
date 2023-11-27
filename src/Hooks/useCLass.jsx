import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCLass = () => {
    
    const axiosSecure = useAxiosSecure()
    const { data: allClass = [] } = useQuery({
        queryKey: ["allClass"],
        queryFn: async () => {
            const res = await axiosSecure.get("/class")
            return res.data
        }
    })
    return [allClass]
};


export default useCLass;