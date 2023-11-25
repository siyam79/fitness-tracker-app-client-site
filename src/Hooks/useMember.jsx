import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMember = () => {
    const axiosPublic = useAxiosPublic();
    const { data: member = [] } = useQuery({
        queryKey: ["member"],
        queryFn: async () => {
            const res = await axiosPublic.get(`http://localhost:5000/memberTrainer?role=member`)
            return res.data
        }
    })
    return [member]
};

export default useMember;