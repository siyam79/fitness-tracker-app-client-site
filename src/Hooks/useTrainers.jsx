import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainers = () => {

    const axiosPublic = useAxiosPublic();
    const { data: trainer = [] ,refetch} = useQuery({
        queryKey: ["trainer"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/roleTrainer?role=trainer`)
            return res.data
        }
    })
    return [trainer,refetch]
};
//     const axiosPublic = useAxiosPublic();
//     const { data: trainer = [] } = useQuery({
//         queryKey: ["trainer"],
//         queryFn: async () => {
//             const res = await axiosPublic.get("/trainers")
//             return res.data
//         }
//     })
//     return [trainer]
// };

export default useTrainers;