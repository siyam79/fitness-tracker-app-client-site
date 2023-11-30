import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useForum = () => {
    const axiosSecure = useAxiosSecure();
    const { data: forum = [], refetch } = useQuery({
        queryKey: ["forum"],
        queryFn: async () => {
            const res = await axiosSecure.get('/forum')
            return res.data
        }
    })
    return [forum, refetch]
};

export default useForum;