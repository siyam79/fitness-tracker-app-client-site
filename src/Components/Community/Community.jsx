import { useEffect, useState } from "react";
import useForum from "../../Hooks/useForum";
import { GrDislike, GrLike } from "react-icons/gr";
const Community = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    const [forum] = useForum()
    console.log(forum);

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };
    const handleDislike = () => {
        setDislikeCount(dislikeCount + 1);
    };




    useEffect(() => {
        document.title = " Fitness-Tracker | Community";
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
                                <div className="badge ">{likeCount}</div>
                                <div className="badge">{dislikeCount}</div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="card-actions ">
                                    <button onClick={handleLike} className="btn"><GrLike></GrLike> </button>
                                </div>
                                <div className="card-actions ">
                                    <button onClick={handleDislike} className="btn"><GrDislike /> </button>
                                </div>
                            </div>




                            {/* 
                            <button
                                className="btn btn-sm bg-blue-600 text-white"
                                onClick={handleLike}
                            >
                                <FaThumbsUp className="text-white"></FaThumbsUp>
                                <div className="badge badge-secondary">{likeCount}</div>
                            </button>
                            <button
                                className="btn btn-sm bg-red-300 text-white"
                                onClick={handleDislike}
                            >
                                <FaThumbsUp className="transform rotate-180"></FaThumbsUp>
                                <div className="badge">{dislikeCount}</div>
                            </button> */}
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Community;