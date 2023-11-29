import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePayments = () => {
    const axiosSecure = useAxiosSecure();
    const { data: paymentHistory = [], refetch } = useQuery({
        queryKey: ["paymentHistory"],
        queryFn: async () => {
            const res = await axiosSecure.get('/paymentHistory')
            return res.data
        }
    })
    return [paymentHistory, refetch]

};

export default usePayments;