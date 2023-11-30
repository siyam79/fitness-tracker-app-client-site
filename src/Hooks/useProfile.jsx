import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useProfile = () => {
const {user} = useAuth()

    const axiosSecure = useAxiosSecure();
    const { data: users = [] ,refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user.email}`)
            return res.data
        }
    })
    return [users,refetch]
};

export default useProfile;