import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useCLass = () => {
    
    const axiosPublic = useAxiosPublic()
    const { data: allClass = [] } = useQuery({
        queryKey: ["allClass"],
        queryFn: async () => {
            const res = await axiosPublic.get("/class")
            return res.data
        }
    })
    return [allClass]
};


export default useCLass;