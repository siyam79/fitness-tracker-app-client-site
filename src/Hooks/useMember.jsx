import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMember = () => {
    const axiosPublic = useAxiosPublic();
    const { data: member = [],refetch } = useQuery({
        queryKey: ["member"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/memberTrainer?role=member`)
            return res.data
        }
    })
    return [member,refetch]
};

export default useMember;