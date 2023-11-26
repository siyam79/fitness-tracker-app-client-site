// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTrainers from "../../Hooks/useTrainers";

// import useTrainers from "../../Hooks/useTrainers";

const Trainer = () => {
    // const [trainers] = useTrainers()

    const [trainer] = useTrainers()

    return (
        <div>
            <div className=" text-center py-10  ">
                <Link to="/beATainer"> <button className=" text-center font-bold text-gray-600 hover:text-green-500 text-xl  badge badge-outline px-10  py-4  ">Become a Trainer</button></Link>
            </div>
           
            <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 "> 
                {
                    trainer.map(item => <div key={item._id}>
                        <div className="card w-80 mx-auto bg-base-100 h-[350px]  shadow-xl">
                            <figure><img className="  w-full  " src={item.profileImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item.trainerName}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <div className=" flex items-center justify-center gap-6 text-2xl ">
                                <Link><FaFacebook> </FaFacebook></Link>
                                <FaInstagram></FaInstagram>
                                <FaLinkedin></FaLinkedin>
                                </div>
                              
                                <div className="card-actions justify-center">
                                   <Link to={`/trainer/${item._id}`}> <div className="font-bold text-gray-600 hover:text-green-500 text-xl badge badge-outline px-6  py-4  ">Know More</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Trainer;