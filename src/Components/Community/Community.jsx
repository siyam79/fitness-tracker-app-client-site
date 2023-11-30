
import { useEffect } from "react";
import useForum from "../../Hooks/useForum";
import {  GrLike } from "react-icons/gr";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
const Community = () => {

    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    // const [likeCount, setLikeCount] = useState(0);
   

    const [forum , refetch] = useForum()
    console.log(forum);





    const handleLike = async (_id) => {
        // setLikeCount(likeCount + 1);
        if(user){
            console.log(_id);
            const res = await axiosPublic.put(`/forums/${_id}`, {email:user?.email})
            console.log(res.data);
           
            refetch({})
          }else{
            toast.warning("Please login first!", {autoClose:1000})
          }
    };

 



    useEffect(() => {
        document.title = "Fitness-Tracker | Community";
    }, []);
    return (
        <div>
            <div>
                {
                    forum.map(item => <div key={item._id} className="card card-side bg-base-100 shadow-xl px-10 my-20 ">
                        <figure><img className="w-20 rounded-full" src="https://i.ibb.co/wLZp3wC/images-1.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            {/* <h2 className="card-title">  {item.title}</h2> */}
                            <p>{item.forum}</p>


                            <div className=" flex items-center gap-14 ">
                                {/* <div className="badge ">{likeCount}</div> */}
                                <h1>{item.likes} </h1>


                            </div>
                            <div className="flex items-center gap-6">
                                <div className="card-actions ">
                                    <button onClick={()=> handleLike(item._id)} className="btn"><GrLike></GrLike> </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Community;