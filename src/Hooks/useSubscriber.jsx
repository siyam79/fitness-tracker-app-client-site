import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useSubscriber = () => {

        const axiosSecure = useAxiosSecure()
        const { data: allSubscriber = [] } = useQuery({
            queryKey: ["allSubscriber"],
            queryFn: async () => {
                const res = await axiosSecure.get("/allSubscriber")
                return res.data
            }
        })
        return [allSubscriber]
    };
    
  

export default useSubscriber;