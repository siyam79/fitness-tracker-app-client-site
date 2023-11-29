import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsTrainer = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isTrainer = [], isPending: isAdminLoading } = useQuery({
        queryKey: ["isTrainer", user?.email],
       
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/trainer/${user.email}`)
            return res.data?.trainer
        }
    })
    return [isTrainer, isAdminLoading]
};

export default useIsTrainer;