import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useTrainers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: trainer = [] ,refetch} = useQuery({
        queryKey: ["trainer"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/roleTrainer?role=trainer`)
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