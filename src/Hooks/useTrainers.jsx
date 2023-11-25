import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainers = () => {

    const axiosPublic = useAxiosPublic();
    const { data: trainer = [] } = useQuery({
        queryKey: ["trainer"],
        queryFn: async () => {
            const res = await axiosPublic.get(`http://localhost:5000/roleTrainer?role=trainer`)
            return res.data
        }
    })
    return [trainer]
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