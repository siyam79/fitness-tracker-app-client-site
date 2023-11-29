import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin = [], isPending: isAdminLoading } = useQuery({
        queryKey: ["isAdmin", user?.email],
    
        queryFn: async () => {
            console.log('asking token');
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // const res = await axiosSecure.get('/admin')
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;